const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: 'This field is required.'
    },
    author: {
        type: String
    },
    year: {
        type: String
    },
    copies: {
        type: String
    }
});



mongoose.model('Book', bookSchema);