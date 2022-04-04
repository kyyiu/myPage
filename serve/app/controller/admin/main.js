'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {

    async addArticle() {

        const tmpArticle = this.ctx.request.body

        const total = await this.app.mysql.query(`SELECT count(0) as total from article where self_id='${tmpArticle.father_id}';`)
 
        const next_id = total[0].total ? total[0].total + 1 : 0
        tmpArticle.self_id = `${tmpArticle.father_id}_${next_id}`
        // tmpArticle.
        const result = await this.app.mysql.insert('article',tmpArticle)
        const insertSuccess = result.affectedRows === 1
        const insertId = result.insertId
    
        this.ctx.body = {
            isScuccess:insertSuccess,
            insertId:insertId
        }
    }

    async updateArticle() {
        const tmpArticle = this.ctx.request.body
        console.log(tmpArticle)
        return;
        const result = await this.app.mysql.update('article',tmpArticle, {
            where: {
                self_id: 1
            }
        })
        console.log(result)
        const insertSuccess = result.affectedRows === 1
        const insertId = result.insertId
    
        this.ctx.body = {
            isScuccess:insertSuccess,
            insertId:insertId
        }
    }

    async getArticle() {
  
        const id = this.ctx.params.id
        // const total = await this.app.mysql.query(`SELECT count(0) as total from article where self_id='${id}';`)
        // console.log(total, typeof total, total[0], total[0].total)
        
        // 分页公式
        // offset=page*limit-limit
        const res = await this.app.mysql.select('article', {
            where: {
                self_id: id
            }
            // limit: pageLimit, //查询条数
            // offset: page*pageLimit-pageLimit //数据偏移量（分页查询使用）
        })

        this.ctx.body = {
            res,
        }
    }

    
    async selectArticles() {
        const query = this.ctx.query
        let [page, pageLimit] = query.pages ? query.pages.split(',') : []
        page = +page || 1
        pageLimit = +pageLimit || 1
        const id = query.id

        // console.log(t, typeof t, t[0], t[0].total)
        // 分页公式
        // offset=page*limit-limit
        const res = await this.app.mysql.select('article', {
            where: id ? {
                father_id: id
            } : {
                order: ['addTime', 'desc']
            },
            limit: pageLimit, //查询条数
            offset: page*pageLimit-pageLimit //数据偏移量（分页查询使用）
        })

        this.ctx.body = {
            res,
            total: res.length
        }
    }
}

module.exports = MainController;

// 获取get传参，this.ctx.query
// 获取post传参 this.ctx.request.body


// 1. get 查询单条信息
// let user = await this.app.mysql.get('users', { id: 1 });
// 2. select 查询多条数据

// let users= await this.app.mysql.select('users');
// 3. select 有条件的查询，蛋疼的是，他的条件只支持=和in，真鸡儿，想自定义还需要用query

// let users = await this.app.mysql.select('users', {
//     where: {
//         name: ['test', 'test1'], // 相当于 in
//     },
//     order: [['created_at', 'desc'], ['state', 'desc']]
// });
// 4. query 直接执行sql语句，为了防止sql注入，采用这种每个?匹配一个元素的方式

// let users = await this.app.mysql.query('select * from users where id > ? and state <> ? and phone is not null', [100, 0]);
// 5. insert 插入数据

// let res = await this.app.mysql.insert('users', {
//     name: 'egg',
//     phone: 'xxxxxx'
// });
// let id = res.insertId; // 得到新插入的数据主键
// 6. update 更新数据

// // 更新id=1的用户信息
// let res = await this.app.mysql.update('users', {
//     name: 'egg',
//     phone: 'xxxxxx'
// }, {
//     id: 1,
// });
// 7. delete 删除数据

// let res = await this.app.mysql.delete('users', {
//     id: 1,
// });


// 1.插入
// await this.app.mysql.insert('users', {
//     name: 'Jack',
//     age: 18
//   })
// 2.查询
//   const result = await this.app.mysql.select('users', {
//     columns: ['id', 'name'], //查询字段，全部查询则不写，相当于查询*
//     where: {
//         name: 'Jack'
//     }, //查询条件
//     orders: [
//         ['id', 'desc'] //降序desc，升序asc
//     ],
//     limit: 10, //查询条数
//     offset: 0 //数据偏移量（分页查询使用）
//   })
// 3.修改
// const result = await this.app.mysql.update('users', {
//       age: 20 //需要修改的数据
//   }, {
//       where: {
//         id: 1
//       } //修改查询条件
//   });
//  4.删除
//   const result = await this.app.mysql.delete('users', {
//     name: 'Jack'
//   })