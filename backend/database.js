const mongoose = require('mongoose');

const URI = 'mongodb://localhost/comicapp';

mongoose.connect(URI).then(db => console.log("db coonected")).catch(err=>console.log(err));

module.exports = mongoose;