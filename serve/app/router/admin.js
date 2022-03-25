module.exports = app => {
    const { router, controller } = app;
    router.post('/admin/addArticle',controller.admin.main.addArticle);
    router.put('/admin/addArticle/:id', controller.admin.main.updateArticle)
    router.get('/admin/getArticle/:id/:pages', controller.admin.main.getArticle);
    router.get('/admin/selectArticle/:pages/:father_id', controller.admin.main.selectArticles);
}