const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>
{
  res.send('get /');
});

router.post('/', (req, res, next)=>{
  res.send('put /')
})

router.get('/add', (req, res, next) =>
{
  res.send('get add');
});

module.exports = router;
