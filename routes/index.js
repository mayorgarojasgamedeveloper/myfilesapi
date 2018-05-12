var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  var response = await db.NOW();
  res.send(`Bienvendio a la API de Academic.Archives [${response[0].now}]`);
});

module.exports = router;
