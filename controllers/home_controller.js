const Todo=require('../models/todo');

// home
module.exports.home =function(req,res){
    Todo.find({},function(err,todo){
        console.log(todo)
        if (err){
            console.log('error occured while fetching data',err);
            return
        }
        return res.render('home',{
        todo_list : todo
        });
    });
    }

//for taking data
module.exports.details =function(req,res){
    //console.log(req.body);
    Todo.create(req.body,function(err,newTodo){
        if(err){
            return console.log('error occured',err)
        }

        else{
        return res.redirect('back');
        }
    });
}