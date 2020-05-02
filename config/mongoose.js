const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TO-DO_LIST');

const db =mongoose.connection;
db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function(){
    console.log('database connection successfull')
})