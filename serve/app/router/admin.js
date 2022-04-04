module.exports = app => {
    const { router, controller } = app;
    router.post('/admin/addArticle',controller.admin.main.addArticle);
    router.put('/admin/addArticle/:id', controller.admin.main.updateArticle)
    router.get('/admin/getArticle/:id', controller.admin.main.getArticle);
    router.get('/admin/selectArticle', controller.admin.main.selectArticles);
}