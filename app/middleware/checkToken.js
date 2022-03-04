'use strict';

module.exports = (options, app) => {
	return async (ctx, next) => {
		let isUserful = true; // 是否可以访问接口
		let token = ctx.headers.authorization ? ctx.headers.authorization : '';
		token = token.substring(7); // 把"Bearer "截取掉，解析的时候不需要加上Bearer
		try {
			const decode = await app.jwt.verify(token, app.config.jwt.secret);
			const datebaseToken = await ctx.service.onlinedb.getOnlineUser(decode.userID);
			if (datebaseToken.data.token !== token) {
				throw 'ERROR';
			}
		} catch (error) {
			isUserful = false;
			const body = {
				status: 400,
				code: 4001,
				message: 'token失效或解析错误',
				data: null
			};
			ctx.helper.success(body);
		}
		if (isUserful) {
			await next();
		}
	};
};
