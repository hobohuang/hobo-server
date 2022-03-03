'use strict';

const argument = {
	'/login': { userID: { type: 'string' }, password: { type: 'password' } },
	'/logout': {},
	'/getFriendList': {},
	'/getMessageList': {},
	'/getMessage': { uid: { type: 'string' }, fid: { type: 'string' } },
	'/test': {},
	'/addFriend': { rid: { type: 'string' }, content: { type: 'string' } },
	'/feedbackAdd': { sid: { type: 'string' }, state: { type: 'number', min: 1, max: 3 } },
	'/getAddlist': {},
	'/searchUser': { uid: { type: 'string' } },
	'/register': {
		uid: { type: 'string' },
		password: { type: 'password' },
		nickname: { type: 'string' },
		icon: { type: 'string' }
	}
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
			ctx.body = {
				code: 4000,
				message: '传入路由有误',
				data: null
			};
		}
	};
};
