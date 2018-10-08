const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;

    const result = await ctx.service.login.login(ctx.request.body);
    if (result) {
      let token = app.jwt.sign({ userId: result.id }, ctx.app.config.jwt.secret, { expiresIn: ctx.app.config.jwt.exp });
      this.ctx.cookies.set(`user-${result.id}`, token, { maxAge: ctx.app.config.jwt.exp * 1000 });
      ctx.success(Object.assign(result.dataValues, { token }));
    } else {
      ctx.fail('用户名或密码错误');
    }
  }

  async logout() {
    ctx.cookies.set('token', '');
  }
}

module.exports = LoginController;
