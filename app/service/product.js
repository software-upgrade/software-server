const Service = require('egg').Service;

class ProductService extends Service {
  async getProducts({ pageSize = this.app.config.pageSize, pageNum = 1, publishStatus, type, name } = {}) {
    let result = { count: 0, rows: [] };
    pageSize = Number.parseInt(pageSize);
    pageNum = Number.parseInt(pageNum);

    let productsAll = await this.getAllProducts();
    let products = await this.ctx.model.Product.findAndCountAll({
      offset: pageSize * (pageNum - 1),
      limit: pageSize,
      where: {
        status: 1,
        ...this.ctx.helper.whereFilter({ publishStatus, type, name })
      },
      include: [
        {
          model: this.ctx.model.ProductPackage,
          as: 'packages',
          order: [['version', 'DESC']],
          limit: 1,
          where: { status: 1 }
        }
      ]
    });

    result.count = products.count;
    products.rows.forEach(product => {
      let temp = this.ctx.helper.pick(product, ['id', 'name', 'model', 'modelId', 'type', 'stage', 'area', 'dept', 'productDesc', 'modelId', 'logo', 'publishStatus', 'projectManager', 'updatedAt']);
      temp.version = product.packages.length ? product.packages[0].version : '';
      if (product.fitPro) {
        temp.fitPro = productsAll.filter(item => product.fitPro.split(',').includes(item.id + ''));
      } else {
        temp.fitPro = [];
      }
      temp.logo = this.ctx.app.config.apihost + product.logo;
      result.rows.push(temp);
    });

    return result;
  }

  async addProduct() {
    const extraParams = await this.ctx.service.file.parse(this.ctx.req);
    let { name, model, type, stage, fitPro, area, dept, projectManager, productDesc, modelId } = extraParams && extraParams.fields;

    if (await this.ctx.model.Product.findOne({ where: { modelId, status: 1 } })) {
      return { msg: 'modelId重复' };
    }

    let product = await this.ctx.model.Product.create({
      name,
      model,
      modelId,
      type,
      stage,
      fitPro,
      area,
      dept,
      projectManager,
      productDesc,
      logo: await this.ctx.service.file.uploadImg(extraParams.files.logo, modelId),
      createdBy: this.ctx.userId,
      updatedBy: this.ctx.userId
    });

    return { result: product };
  }

  async updateProduct(id) {
    const extraParams = await this.ctx.service.file.parse(this.ctx.req);
    let { name, model, type, stage, fitPro, area, dept, projectManager, productDesc } = extraParams && extraParams.fields;

    let product = await this.ctx.model.Product.findById(id);
    if (!(product && product.status == 1)) {
      return {};
    }

    let params = {
      name,
      model,
      type,
      stage,
      fitPro,
      area,
      dept,
      projectManager,
      productDesc,
      updatedBy: this.ctx.userId
    };

    let logo = await this.ctx.service.file.uploadImg(extraParams.files.logo, product.modelId);
    if (logo) {
      Object.assign(params, { logo });
      this.ctx.service.file.delFile(product.logo);
    }

    let result = await this.ctx.model.Product.update(params, { where: { id, status: 1 } });
    return { length: result[0] };
  }

  async delProduct(id) {
    const product = await this.ctx.model.Product.findById(id, {
      include: [
        {
          model: this.ctx.model.ProductPackage,
          as: 'packages'
        }
      ]
    });

    if (product && product.status === 1) {
      if (product.publishStatus !== 'pro_status_01') {
        return { msg: `未发布状态才能删除` };
      }

      if (product.packages && product.packages.filter(item => item.status == 1).length) {
        return {
          msg: `移除产品包【${product.packages
            .filter(item => item.status == 1)
            .map(p => p.version)
            .join('、')}】,再删除产品！`
        };
      }
    }
    if (product.logo) {
      this.ctx.service.file.delFile(product.logo);
    }
    const result = await this.ctx.model.Product.update({ status: 2 }, { where: { id, status: 1 } });
    return result;
  }

  //查询所有产品
  async getAllProducts() {
    return await this.ctx.model.Product.findAll({ where: { status: 1 } }).map(item => ({ id: item.id, name: item.name }));
  }

  //试用
  async tryout({ id }) {
    let result = await this.ctx.model.Product.update({ publishStatus: 'pro_status_02', updatedBy: this.ctx.userId }, { where: { id, status: 1, publishStatus: { $in: ['pro_status_01', 'pro_status_04'] } } });
    return { length: result[0] };
  }

  //撤回
  async withdraw({ id }) {
    let result = await this.ctx.model.Product.update({ publishStatus: 'pro_status_01', updatedBy: this.ctx.userId }, { where: { id, status: 1, publishStatus: { $in: ['pro_status_02'] } } });
    return { length: result[0] };
  }

  //发布
  async publish({ id }) {
    let result = await this.ctx.model.Product.update({ publishStatus: 'pro_status_03', updatedBy: this.ctx.userId }, { where: { id, status: 1, publishStatus: { $in: ['pro_status_01', 'pro_status_02', 'pro_status_04'] } } });
    return { length: result[0] };
  }

  //下架
  async obtained({ id }) {
    let result = await this.ctx.model.Product.update({ publishStatus: 'pro_status_04', updatedBy: this.ctx.userId }, { where: { id, status: 1, publishStatus: { $in: ['pro_status_03'] } } });
    return { length: result[0] };
  }

  async report({ modelId, deviceId, version, deviceInfo, deviceStatus }) {
    try {
      deviceInfo = JSON.stringify(deviceInfo);
    } catch (e) {
      deviceInfo = '';
    }
    console.log(this.ctx);
    const product = await this.ctx.model.Product.findOne({ where: { modelId, status: 1 } });
    if (!product) {
      return { msg: '产品不存在' };
    }

    let productLog = await this.ctx.model.ProductLog.create({
      deviceName: product.name,
      deviceId,
      version,
      deviceInfo,
      deviceStatus,
      softwareIp: this.ctx.req.connection.remoteAddress
    });
    return { result: productLog };
  }

  async getLogs({ pageSize = this.app.config.pageSize, pageNum = 1, publishStatus, type, name } = {}) {
    let result = { count: 0, rows: [] };
    pageSize = Number.parseInt(pageSize);
    pageNum = Number.parseInt(pageNum);

    let productsAll = await this.getAllProducts();
    let products = await this.ctx.model.Product.findAndCountAll({
      offset: pageSize * (pageNum - 1),
      limit: pageSize,
      where: {
        status: 1,
        ...this.ctx.helper.whereFilter({ publishStatus, type, name })
      },
      include: [
        {
          model: this.ctx.model.ProductPackage,
          as: 'packages',
          order: [['version', 'DESC']],
          limit: 1,
          where: { status: 1 }
        }
      ]
    });

    result.count = products.count;
    products.rows.forEach(product => {
      let temp = this.ctx.helper.pick(product, ['id', 'name', 'model', 'modelId', 'type', 'stage', 'area', 'dept', 'productDesc', 'modelId', 'logo', 'publishStatus', 'projectManager', 'updatedAt']);
      temp.version = product.packages.length ? product.packages[0].version : '';
      if (product.fitPro) {
        temp.fitPro = productsAll.filter(item => product.fitPro.split(',').includes(item.id + ''));
      } else {
        temp.fitPro = [];
      }
      temp.logo = this.ctx.app.config.apihost + product.logo;
      result.rows.push(temp);
    });

    return result;
  }
}

module.exports = ProductService;
