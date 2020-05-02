//const express=require('express');
const Todo=require('../models/todo');
//const app=express();

// home
module.exports.home =function(req,res){
    return res.render('home');
}

//for taking data
module.exports.details =function(req,res){
    //console.log(req.body);
    Todo.create(req.body,function(err,newTodo){
        if(err){
            return console.log('error occured',err)
        }

        console.log('****',newTodo);
        console.log('Data sent successfully')
        return res.render('home');
    });
}