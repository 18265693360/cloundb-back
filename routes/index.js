var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'funck' });
});

module.exports = router;

//导入book路由
const bookRoutes = require('./book');
const catagoryRoutes = require('./catagory');
const titleRoutes = require('./title');
// const articleRoutes = require('./article');
const userRoutes = require('./user');
const msgRoutes = require('./msg');
const swiperRoutes = require('./swiper');
const collectionRoutes = require('./collection')


          //写进来就可以不用每次都写book 嵌套路由
router.use('/book',bookRoutes);
router.use('/catagory',catagoryRoutes);
router.use('/title',titleRoutes);
router.use('/article',articleRoutes);
router.use('/user',userRoutes);
router.use('/msg',msgRoutes);
router.use('/swiper',swiperRoutes);
router.use('/collection',collectionRoutes);

可以删除写自己定义的   /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;





