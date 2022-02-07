module.exports = app => {
    const { router, controller } = app;
    router.post('/admin/addArticle',controller.admin.main.addArticle);
}