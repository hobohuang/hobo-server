/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = (exports = {
		session: {
			key: 'HOBO_SESS', // 修改session的key
			httpOnly: true, // 是否只能有服务器修改
			maxAge: 1000 * 60 * 60 * 24, // 过期时间
			renew: false // 更新页面自动更新
		},
		// cors跨域配置
		// CSRF 关闭
		security: {
			csrf: {
				enable: false
			},
			domainWhiteList: ['*'] // 允许访问域名的白名单,*表示都能访问
		},
		cors: {
			origin: '*',
			allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS' // 允许请求的方法
		},
		// jwt鉴权配置
		jwt: {
			secret: 'admin123456' // token的加密的密钥,自己随便设置
		},
		mysql: {
			app: true, // 是否挂载到app下面
			agent: false, // 是否挂载到代理下面
			client: {
				host: '127.0.0.10', // 数据库地址
				port: '3306', // 端口
				user: 'root', // 用户名
				password: 'hyj123456', // 密码
				database: 'hobo_service' // 连接的数据库名称
			}
		}
	});

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1646298686894_6556';

	// add your middleware config here
	config.middleware = ['validator'];
	// config.checkToken = {
	// 	enable: true, // 是否开启该中间件，不写默认开启
	// 	ignore: ['/login', '/register'] // 不运行该中间件的路由
	// };

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
		baseRouter: '/api/v1'
	};

	return {
		...config,
		...userConfig
	};
};
