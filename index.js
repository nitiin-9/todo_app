
// to import express 
const express = require('express'); 
// access all functionalities in app
const app =express();
// definining the port
const port = 4000;  
// import connnection file mongoose
const db = require('./config/mongoose');
 
const Todo = require('./models/todo');
// middleware for reading the data
 app.use(express.urlencoded()); 
 
 // use express router
 app.use('/',require('./routes'));  
 
 // access the assets
 app.use(express.static('./assets'));

  // setting up the view engine
 app.set('view engine' , 'ejs');
 app.set('views' , './views') ;
  
  
app.listen(port,function(err){
  if(err) {
      console.log(`error in running the server ${err}`);
  }
  //  console.log(__dirname);
  console.log(`server is running on port:${port}`);

})

