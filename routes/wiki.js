const express = require('express');
const router = express.Router();
const models = require('../models');
let Page = models.Page; 
let User = models.User; 

router.get('/', (req, res, next) =>
{
  res.redirect('/');
});

router.post('/', (req, res, next)=>{
  var page = Page.build({
    title: req.body.title,
    // urlTitle: req.body.title,
    content: req.body.content,
    email: req.body.email,
    status: req.body.pagestatus
  });

  page.save()
  .then(res.redirect('/'))
  .catch(console.error.bind(console));
})

router.get('/add', (req, res, next) =>
{
  res.render('addpage');
});

module.exports = router;
