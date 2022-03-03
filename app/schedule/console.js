'use strict';
module.exports = {
	schedule: {
		interval: '24h', // 一天间隔
		type: 'all', // 指定所有的 worker 都需要执行
		immediate: true
	},
	async task() {
		console.log('定时任务执行中');
		// const res = await ctx.curl('http://www.api.com/cache', {
		// 	dataType: 'json'
		// });
		// ctx.app.cache = res.data;
	}
};
