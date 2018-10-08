const Service = require('egg').Service;
const md5 = require('md5');

class UserService extends Service {
  async getUsers({ pageSize = this.app.config.pageSize, pageNum = 1, name = '', code = '', username = '', roleId, status = 1 } = {}) {
    let result = { count: 0, rows: [] };
    let users = {};
    pageSize = Number.parseInt(pageSize);
    pageNum = Number.parseInt(pageNum);
    status = Number.parseInt(status || 1);

    users = await this.ctx.model.User.findAndCountAll({
      offset: pageSize * (pageNum - 1),
      limit: pageSize,
      // attributes: {
      //   exclude: ['createdAt', 'created_at', 'updated_at', 'password']
      // },
      where: {
        status,
        ...this.ctx.helper.whereFilter({ username, name, code }),
        id: {
          $notIn: [1, this.ctx.userId]
        }
      },
      include: [
        {
          model: this.ctx.app.model.Role,
          as: 'roles'
          // through: {
          //   attributes: []
          // },
        }
        // {
        //   model: this.ctx.app.model.User,
        //   as: 'createdByName'
        // },
        // {
        //   model: this.ctx.app.model.User,
        //   as: 'updatedByName'
        // }
      ],
      distinct: true
    });

    result.count = users.count;
    users.rows.forEach(user => {
      let roles = [];
      user.roles.forEach(role => {
        roles.push(this.ctx.helper.pick(role, ['id', 'name']));
      });
      if (!roleId || roles.findIndex(item => item.id == roleId) !== -1) {
        // result.rows.push(Object.assign(this.ctx.helper.unpick(user.dataValues, ['created_by', 'updated_by', 'createdByName', 'updatedByName']), { roles: roles, createdBy: user.createdByName.name, updatedBy: user.updatedByName.name }, {}));
        result.rows.push(Object.assign(this.ctx.helper.pick(user, ['id', 'code', 'name', 'username', 'phone', 'email', 'updatedAt', 'status']), { roles }));
      }
    });
    return result;
  }

  async addUser({ username, roles = [], phone, email, password, code, name }) {
    if (!(roles instanceof Array)) {
      return {};
    }

    let role = await this.ctx.model.Role.findAll({
      where: {
        id: {
          $in: roles
        },
        status: 1
      }
    });

    if (roles.length !== role.length) {
      return {
        msg: '无效角色！'
      };
    }

    let user = await this.ctx.model.User.create({
      username,
      phone,
      email,
      password: md5(password),
      code,
      name,
      createdBy: this.ctx.userId,
      updatedBy: this.ctx.userId
    });
    user.setRoles(role);
    return { result: user };
  }

  async updateUser(id, { name, password, phone, email, roles = [], code }) {
    if (id == 1) {
      return {
        msg: '非法操作!'
      };
    }

    let user = await this.ctx.model.User.findById(id, {
      include: [
        {
          model: this.ctx.app.model.Role,
          as: 'roles'
        }
      ]
    });

    if (!user) {
      return {
        length: 0
      };
    }

    let columns = {
      name,
      phone,
      email,
      roles,
      code,
      updatedBy: this.ctx.userId
    };
    if (password) {
      Object.assign(columns, {
        password
      });
    }

    let result = await this.ctx.model.User.update(columns, { where: { id } });
    let role = await this.ctx.model.Role.findAll({ where: { id: { $in: roles }, status: 1 } });
    user.setRoles(role);

    return { length: result[0] };
  }

  async delUser(id) {
    const user = await this.ctx.model.User.findById(id);
    if (user && user.status === 1) {
      return {
        msg: '有效用户不能删除！'
      };
    }

    let result = await this.ctx.model.User.update({ status: 2 }, { where: { id, status: 0 } });
    return { length: result[0] };
  }

  async setStatus({ status, id }) {
    if (status == 2 || id == 1) {
      return {
        msg: '非法操作!'
      };
    }

    let result = await this.ctx.model.User.update({ status }, { where: { id } });

    return { length: result[0] };
  }
}

module.exports = UserService;
