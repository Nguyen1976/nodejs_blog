const newsRouter = require('./news');
const SiteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/courses', coursesRouter);

    app.use('/', SiteRouter);


}

module.exports = route;
