
// import mongoose
const mongoose= require('mongoose');
// connection to database
mongoose.connect('mongodb://localhost/todo_app') ;
// varible to check err in connection
const db = mongoose.connection;
// checking error in connecting mongodb
db.on('error', console.error.bind(console,"Error connecting to mongoDb"));

// for successful connection
db.once('open' , function(){
  console.log('  successfully connected to Database : Mongodb');

});

module.exports=db;