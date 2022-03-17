module.exports = app => {
    const { router, controller } = app;
    router.post('/admin/addArticle',controller.admin.main.addArticle);
    router.get('/admin/selectArticle/:id/:pages', controller.admin.main.selectArticle);
}