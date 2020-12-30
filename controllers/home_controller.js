 
 const Todo = require('../models/todo');
// for rendering homepage (ejs file);
module.exports.home = function(req,res) {
     Todo.find({},function(err,tasks){
        if(err) {
          console.log('error in fetching data')
        }
        return res.render('home' , {
          title : " My todo app",
          task_list : tasks
        });
     });
   
}
// module.exports.actionName = function(req,res){}

// for adding a task 
 module.exports.add = function(req,res) {
  Todo.create({
    description: req.body.description,
    category : req.body.category,
    date : req.body.date
  } , function(err, newTask){
      if(err) {
        console.log('error in creating tasks') ;
        return;
      }
      console.log("*******" , newTask);
     
    return res.redirect('back');
  });

 }







// for deleting task

 module.exports.delete = function(req,res){
    let id = req.body;
    console.log(id);

    let checkboxs = Object.keys(id).length;

    for(let i=0;i<checkboxs;i++){
        Todo.findByIdAndDelete(Object.keys(id)[i],function(err){
            if(err){
                console.log("error in deleting");
                return;
            }
        });
    }
   return res.redirect('back');    
}

