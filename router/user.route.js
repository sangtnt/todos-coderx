var express= require ('express');
var router= express.Router();
var controller = require('../controller/users.controller');

router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/add', controller.add);
router.post('/addNew', controller.addNew);
router.get('/view/:id', controller.view);
module.exports= router;