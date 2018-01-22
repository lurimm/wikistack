'use strict';
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = ('body-parser');
const morgan = ('morgan');
const models = require('./models');
const routes = require('./routes/index')


const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }) // point nunjucks to the proper directory for templates
app.use(express.static('public')) //serve up static files
app.use(routes);

const page = models.Page.sync();
const user = models.User.sync();

// Promise.all([page, user])
// .then(() => {
//     console.log('database synced');
//     app.listen(3000, () => ('listening'));
// }).catch(console.error.bind(console));

models.db.sync({force: true})
.then(() => {
    console.log('database synced');
    app.listen(3000, () => console.log('listening'))
})
.catch(console.error.bind(console));

app.get('/', (req, res, next) => {
    res.render('index');
})
