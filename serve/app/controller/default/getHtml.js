'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')

const htmlPath = path.join(__dirname, '../../public/cssAbout/') 

class GetHtmlController extends Controller {
  async index() {
    const { ctx } = this;
   
    // fs.readFile(, (err, data) => {
    //   console.log(err, data.toString())
    //   res = data.toString()
    // })
    ctx.set('content-type','text/html')
    ctx.body =  fs.createReadStream(htmlPath+'1.html')
  }

}

module.exports = GetHtmlController;
