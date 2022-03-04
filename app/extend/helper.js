'use strict';

module.exports = {
	// 解码token
	decode() {
		const { ctx, app } = this;
		let token = ctx.headers.authorization ? ctx.headers.authorization : '';
		token = token.substring(7); // 把"Bearer "截取掉，解析的时候不需要加上Bearer
		const decode = app.jwt.verify(token, app.config.jwt.secret);
		return decode;
	},
	success(res = null) {
		const { ctx } = this;
		ctx.status = res.status;
		if (res.status) {
			delete res.status;
		}
		ctx.body = {
			code: res.code ? res.code : 0, // 0：成功，其他失败
			msg: res.msg ? res.msg : '请求成功',
			data: res.data ? res.data : null
		};
	}
};
