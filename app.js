'use strict';
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = ('body-parser');
const morgan = ('morgan');

const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }) // point nunjucks to the proper directory for templates

app.listen(3000, () => console.log('im listening'));

app.get('/', (req, res, next) => {
    res.render('index');
})
