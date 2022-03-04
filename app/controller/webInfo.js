'use strict';

const Controller = require('egg').Controller;

class WebInfoController extends Controller {
	async getWebInfo() {
		this.ctx.body = 'hi';
	}
}

module.exports = WebInfoController;
