class SiteController {
    //[GET] /news
    index(req, res) {
        res.render('home');
    }

    //[GET] /new/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
