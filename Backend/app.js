const express = require('express');
const ProductData = require('./src/model/Productdata');
const cors = require('cors');
var bodyparser = require('body-parser');
const mongoose = require('mongoose');
var app = new express();

app.use(cors());
app.use(bodyparser.json())
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    ProductData.find()
       .then(function(products){
           console.log(products);
           res.send(products);
       });
});
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
    }
    var productData = new ProductData(product);
    product.save();
    //console.log(req.params);
});

mongoose.connect("mongodb://localhost:27017/shop", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(r=>{
    app.listen(3000,function(){
        console.log('listening to port 3000');
    });
});




// const express = require('express');
// const ProductData = require('./src/model/Productdata');
// const cors = require('cors');
// var bodyparser=require('body-parser');
// const { schema } = require('./app/productlist/productdata');
// var app = new express();
// app.use(cors());
// app.use(bodyparser.json())
// app.get('./proucts',function(req,res){
//     res.header("Access-Control-Allow-Origin","*")
//     res.header('Access-Control-Allow-Methods: GET,POST,DELETE,PATCH,PUT,UPDATE')
//     ProductData.find()
//         .then(function(products){
//             res.send(products);
//         });

// });
// app.post('./insert',function(req,res){
//     res.header("Access-Control-Allow-Origin","*")
//     res.header('Access-Control-Allow-Methods: GET,POST,DELETE,PATCH,PUT,UPDATE')
//     console.log(req.body);
//     var product = {
//         productId : req.body.product.productId,
//         productName : req.body.product.productName,
//         productCode : req.body.product.productCode,
//         releaseDate : req.body.product.releaseDate,
//         description : req.body.product.description,
//         price : req.body.product.price,
//         starRating : req.body.product.starRating,
//         imageUrl : req.body.product.imageUrl,

//     }
//     // const user = {
//     //     imageUrl: 'ros@gmail.com',
//     //     productName: 'Devito',
//     //     productId: 'KLf',
//     //     price: '1200',
//     //     Rating: '5',

//     // }

//     // await new schema(user).save()

//     var product = new ProductData(product);
//     product.save();
// });
// app.listen(3000,function(){
//     console.log('listening to port 3000');
// })