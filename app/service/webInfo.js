'use strict';

const Service = require('egg').Service;

class WebInfoService extends Service {
	async echo() {
		console.log(123);
	}
}

module.exports = WebInfoService;
