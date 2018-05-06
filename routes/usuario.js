var express = require('express');
var controller = require('../controllers/usuarioController');
var multer  = require('multer');
var upload = multer({ dest: 'C:\\Users\\mayor\\Documents\\PROJECTS\\academicweb\\img\\usuarios' });

var router = express.Router();

router.post('/', async function(req, res, next) {
  var response = controller.create(req, res);
  response.then(function(result) {
    res.json(result)
  });
  response.catch(function(e) {
    res.json(e)
  });
  //res.json(response);
});

router.get('/', async function(req, res, next) {
  var response = await controller.list(req, res);
  res.json(response);
});

router.get('/:usuario', async function(req, res, next) {
  var response = await controller.view(req, res);
  res.json(response);
});

router.get('/:usuario/:contrasena', async function(req, res, next) {
  var response = await controller.find(req, res);
  res.json(response);
});

router.put('/:usuario', async function(req, res, next) {
  var response = await controller.editInfo(req, res);
  res.json(response);
});

router.post('/:usuario/foto',upload.single('foto'), async function(req, res, next) {
  var response = await controller.editFoto(req, res);
  var html = `<h1>Imagen Subida</h1>`;
  html += `<h2>Cerrar esta pagina!!</h2>`;
  res.send(html);
});

router.put('/:usuario/contrasena', async function(req, res, next) {
  var response = await controller.editContrasena(req, res);
  res.json(response);
});

router.delete('/', async function(req, res, next) {
  var response = await controller.delete(req, res);
  res.json(response);
});

module.exports = router;
