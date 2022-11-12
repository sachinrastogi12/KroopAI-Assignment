const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BookDB', { useNewUrlParser: true }, (err) => {  //to connect the database in the first paramter pass the url to connect the db & in second userParser true then err
    if (!err) { console.log('MongoDB Connection Succeeded.') }   // if there is no err then make connection
    else { console.log('Error in DB connection : ' + err) }       //else error 
});

require('./book.model');  //done connecting mongo & node

//in ordere to run this db.js file we have to add req statement for this file inside the root file i.e. server.js file