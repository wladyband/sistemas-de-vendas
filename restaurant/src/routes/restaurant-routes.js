'use strict'

var express = require('express');
var controller = require('../controllers/restaurant-constroller');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/restaurant' });

const router = express.Router();

//sistema

router.get('/teste', controller.teste1);
router.get('/restaurants', controller.get); 

router.get('/restaurants/:id', controller.getSlug);
router.get('/restaurants/:restaurantId/reviews', controller.getReviews);
router.get('/restaurants/:restaurantId/menu',  controller.getMenu);

router.post('/orders', controller.postOrder);


//admin

router.get('/menus/:description', controller.getMenus); 

router.post('/admin-painel/criar', controller.postRestaurant);
router.put('/restaurant/:id', controller.updateRestaurant);



router.get('/listas', controller.get);
router.get('/admin-painel/edit/:id', controller.getSlugId);
router.delete('/restaurant/:id', controller.deleteRestaurant);

//salvar
router.post('/upload/:id', [md_upload], controller.uploadImagem);
//mostrar
router.get('/imageRestaurante/:imageFile',  controller.getImageFile);





module.exports = router