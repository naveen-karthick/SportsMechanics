var express = require('express');
var router = express.Router();

var videos = [
  {
    url:"https://d3d0fl6l6djog.cloudfront.net/IPL-2017/SUNRISERSVSROYALCHALLENGERS050417/SUNRISERSVSROYALCHALLENGERS050417-SH-Inn1-Over1-Ball2.mp4",
    title:"Ind vs SA - SA tour virat 50",
    length:"4:58",
    date:"18/10/2017"

  }


];



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json(videos);
});


router.get('/videos',function(req,res,next) {
  res.json(videos);
});


module.exports = router;
