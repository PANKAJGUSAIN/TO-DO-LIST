const express =require('express');
const router =express.Router();
const homeController=require('../controllers/home_controller');

console.log('router in position');

router.get('/', homeController.home);

router.post('/deatils', homeController.details);

router.get('/delete-todo', homeController.delete);

module.exports=router;
