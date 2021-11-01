const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

const productSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: [true, 'Product already exists.']
  },
  description: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  image: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  quantity: {
    type: Number,
    min: 0,
    max: 1000
  },
  price: {
    type: Number,
    required: REQUIRED_VALIDATION_MESSAGE,
    min: 1,
    max: 500000
  },
  likes: [{
    type: mongoose.Schema.Types.String
  }],
  reviews: [],

});


let Product = mongoose.model('Product', productSchema);
module.exports=Product;
module.exports.seedProduct = () => {
  Product.find({}).then(products => {
    if (products.length > 0) return

    const productsSeed = [
      {
      
        name: 'Apple',
        description: 'Apple fruit',
        image: 'https://cdn.shopify.com/s/files/1/2331/3573/products/Fresh-Royal-Gala-Apples-from-france.jpg?v=1505654842',
        price: 2,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Coconut Milk',
        description: 'Coconut milk is made by grating flesh from a brown coconut, soaking it in water and then straining it to produce a milk-like consistency.',
        image: 'https://silk.com/wp-content/uploads/2019/02/silk-original-coconutmilk.png',
        price: 25,
        likes: [],
        reviews: []
      },
      {
        
        name: 'Oranges',
        description: 'Egypt Orange fruit',
        image: 'https://s7d6.scene7.com/is/image/bjs/17197?$bjs-Zoom$',
        price: 7,
        likes: [],
        reviews: []
      },
      {
        
        name: 'Black Tea',
        description: 'The Black Tea bags are picked at the peak of freshness for a naturally smooth taste',
        image: 'https://www.redrosetea.ca/wp-content/uploads/sites/77/2017/02/xCA_RR_174g_Tea_Bold_44380_FOP-1.png,qx25925.pagespeed.ic.asx1JQ5QbY.jpg',
        price: 7,
        likes: [],
        reviews: []
      },
      {
        
        name: 'Brocoli',
        description: 'Broccoli - 250 g.',
        image: 'https://cdn.shopify.com/s/files/1/0004/4426/8609/products/Broccoli_Single_Head_8e270707-e3ac-4583-afc8-6a9bb7e6230f_400x400.jpg?v=1544590546',
        price: 4,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Bun',
        description: 'Bun 200 gm.',
        image: 'https://www.spenlo.com/image/cache/catalog/products/Amalas/Amalas-Sweet-Bun-200gm-700x700.jpg',
        price: 10,
        likes: [],
        reviews: []
      },
      {
        
        name: 'Nescafe Classic Jar',
        description: 'Nescafe Classic Jar 50gm',
        image: 'https://www.spenlo.com/image/cache/catalog/00181Z-%2B%2BfOKnL._SL1500_-700x700.jpg',
        price: 12,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Kelloggs Chocos',
        description: 'Kelloggs Chocos 110gm',
        image: 'https://www.spenlo.com/image/cache/catalog/products/Kelloggs/Kelloggs-Chocos-125gm-700x700.jpg',
        price: 20,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Naadan Egg',
        description: 'Naadan Egg - Pack Of 6',
        image: 'https://www.spenlo.com/image/cache/catalog/products/MKS/Naadan-Egg-Pack-Of-6-700x700.jpg',
        price: 15,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Cadburys Dairy Milk 4 Pack',
        description: 'Contains Milk, May Contain Nuts, May Contain Wheat.',
        image: 'https://www.britishcornershop.co.uk/img/large/CY0256.jpg',
        price: 12,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Soya Milk',
        description: 'Vegan , 1Litre',
        image: 'https://www.luluhypermarket.com/medias/164734-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5ODYzNHxpbWFnZS9qcGVnfGhhMS9oMTIvMTE3Nzk2NTU4Mjc0ODYvMTY0NzM0LTAxLmpwZ18xMjAwV3gxMjAwSHw5MTUzODc3ZTk3MGU5NzFmOGJhMDA2MDA4MzFlYmExZDEyYTA5NDJkMDI1NGExODk0YTk0MDI4MGJmZmM0NTQ2',
        price: 20,
        likes: [],
        reviews: []
      }, 
      {
      
        name: 'Mini Pain Au Chocolate',
        description: 'Mini Pain Au Chocolate Croissants Pack ,12pcs',
        image: 'https://www.luluhypermarket.com/medias/975540-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNjAyMTB8aW1hZ2UvanBlZ3xoY2YvaGZhLzExNjE0NjA5MzQyNDk0Lzk3NTU0MC0wMS5qcGdfMTIwMFd4MTIwMEh8MjM4M2M5OTcxZmFlMzFlZDYzODYzYmE3YWZkMjZhZWUxOWZmMjg0MWY4ODMxODY3ZmZiYzE4YmY5NTNmM2I3Yw',
        price: 15,
        likes: [],
        reviews: []
      },   
      {
      
        name: 'Yum Earth Organic Gummy Fruit Snacks',
        description: 'Organic gummy fruit snacks 50g',
        image: 'https://www.luluhypermarket.com/medias/1670664-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzE0OTR8aW1hZ2UvanBlZ3xoNWIvaGZmLzk3NjQzMTA2Nzk1ODIvMTY3MDY2NC0wMS5qcGdfMTIwMFd4MTIwMEh8YmVlNDhkMjVhYTY2MGQzMGEwZDQwMThmNTEyMDMzNTQxZTQ4MTRiOWVhN2YxZWIyZTljNDIxN2U3NjAwOWMzOQ',
        price: 9,
        likes: [],
        reviews: []
      },   
      {
      
        name: 'Almarai Super Grapes & Berries Juice',
        description: 'Super grapes & berries juice ,100% juice , 1 Litre',
        image: 'https://www.luluhypermarket.com/medias/1538460-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDg5Mzd8aW1hZ2UvanBlZ3xpbWFnZXMvaGExL2gwNi85MTU4MzIxMzA3Njc4LmpwZ3w2MzkyMDMwZDg5MTg2MDJlODA5NDNhYmJiOTdjNzI3YWZjZmVlZDQ1MTNkZTlkYzdkMTQ2MGZhMDQ4ZDMwMzNj',
        price: 17,
        likes: [],
        reviews: []
      },   
      {
      
        name: 'Twix Top Chocolate Bar',
        description: 'Chocolate Top Biscuits ,21g',
        image: 'https://www.luluhypermarket.com/medias/1010973-00001.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjAwNTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDg2L2hmOS85MDczMjIwODc4MzY2LmpwZ3w1YWIxMDBjNGE3ZWZhMzNmYTRjMzNhZjM3NGI2MTcxZmIxNGUwMDJiZjdmYmI3NDM3NTgwNzgyNTJkZjA1OTY4',
        price: 2,
        likes: [],
        reviews: []
      },     
        
    ]

    Product
      .create(productsSeed)
      .then(() => console.log('Seeded candies successfully.'))
      .catch((error) => console.log(error))
  })
}