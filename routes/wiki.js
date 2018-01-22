const express = require('express');
const router = express.Router();
const models = require('../models');
let Page = models.Page;
let User = models.User;

router.get('/', (req, res, next) =>
{
  res.redirect('/');
});


router.post('/', (req, res, next) => {
  var page = Page.build({
    title: req.body.title,
    // urlTitle: req.body.title,
    content: req.body.content,
    email: req.body.email,
    status: req.body.pagestatus
  });

  page.save()
  .then((aPage) => {
    // res.redirect('/wiki/' + aPage.urlTitle);
    res.redirect(aPage.route);
  })
  .catch(console.error.bind(console));
})

router.get('/add', (req, res, next) =>
{
  res.render('addpage');
});


router.get('/:urlTitle', (req, res, next) =>
{
  //select the page, return the page
  Page.findAll({
    where: {
      urlTitle: req.params.urlTitle
    }
  })
  .then((instances) => {
    res.render('wikipage', {
      title: instances[0].title,
      content: instances[0].content
    });
  })
  .catch(console.error.bind(console));

  // res.send(req.params.urlTitle);
});

module.exports = router;
