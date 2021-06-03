// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/ProductDb');
// const Schema = mongoose.Schema;

// var NewProductSchema = new  Schema({
//         productId : Number,
//         productName : String,
//         productCode : String,
//         releaseDate : String,
//         description : String,
//         price : Number,
//         starRating : Number,
//         imageUrl : String
// });


// var Productdata = mongoose.model('product', NewProductSchema);

// module.exports = Productdata;

const mongoose = require('mongoose');

  
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    productId : Number,
    description : String,
    imageUrl : String,
    price : Number,
    productCode : String,
    productName : String,
    
    
});

var ProductData = mongoose.model('Product',NewProductSchema);
module.exports = ProductData;


