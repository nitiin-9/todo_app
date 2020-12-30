const express = require('express');
const router= express.Router();
// to import router file
const homeController= require('../controllers/home_controller');
 


console.log('router is loaded'); 
   // router for homecontroller
 router.get('/',homeController.home); 
 // router to create task
 router.post('/create-task',homeController.add); 
 // router to delete task;
 router.post('/delete-task' ,homeController.delete);
//for any further routes acces from here
// router.use('/routerName', require('./routerFile'));
module.exports= router;