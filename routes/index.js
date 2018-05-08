var express = require('express');
var db = require('../db');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  var response = await db.NOW();
  res.send(`Bienvendio a la API de Academic.Archives [${response[0].now}]`);
});

/* GET home page. */
router.get('/email', async function(req, res, next) {
  sgMail.send ({
    to: 'manuel.mayorgar@alumnos.udg.mx',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }), function(err, json) {
    if(err) res.send(err);
    res.send(`Correo enviado!`);
  }
});

module.exports = router;
