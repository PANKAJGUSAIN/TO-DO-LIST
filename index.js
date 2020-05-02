const express=require('express');
const app=express();
const port=8000;
const path=require('path')
//
const db=require('./config/mongoose');
const Todo=require('./models/todo');
//
app.use(express.urlencoded())
app.use('/',require('./routes/index'));
//
 app.set('view engine','ejs');
 app.set('views',path.join(__dirname,'views'));
 app.use(express.static('assets'));
//

app.listen(port,function(err){
    if(err){
        console.log(`error while running the server: ${err}`)
    }
    else{
        console.log(`server is up and running at port: ${port}`);
    }
})