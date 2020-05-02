const mongoose=require('mongoose');
const TodoSchema = new mongoose .Schema({
    itemname :{
        type:String,
        required:true
    },

    type:{
        type:String,
        required :true
    },
    date:{
        type:String,
        required:true
    }
});

const Todo = mongoose .model('todo',TodoSchema);

module.exports=Todo;
