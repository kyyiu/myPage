'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {

    async addArticle(){

        let tmpArticle= this.ctx.request.body
        // tmpArticle.
        const result = await this.app.mysql.insert('article',tmpArticle)
        const insertSuccess = result.affectedRows === 1
        const insertId = result.insertId
    
        this.ctx.body={
            isScuccess:insertSuccess,
            insertId:insertId
        }
    }

}

module.exports = MainController;
