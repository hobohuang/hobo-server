'use strict';

const argument = {
	// '/login': { userID: { type: 'string' }, password: { type: 'password' } },
	'/': {}
};

module.exports = () => {
	return async (ctx, next) => {
		const data = ctx.request.body;
		const path = ctx.path;
		if (argument[path]) {
			try {
				if (Object.keys(argument[path]).length !== 0) {
					ctx.validate(argument[path], data);
				}
				await next();
			} catch (error) {
				ctx.body = error;
			}
		} else {
			const body = {
				status: 400,
				code: 4000,
				msg: '传入路由有误',
				data: null
			};
			ctx.helper.success(body);
		}
	};
};
