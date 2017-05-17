var express = require('express');
var app = express();
var bodyParser = require("body-parser")

var campgrounds = [
  {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Granite Hill", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"},
  {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Granite Hill", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"},
  {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Granite Hill", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"}
]

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res){
  res.render('campgrounds', {campgrounds:campgrounds});
});

app.post('/campgrounds', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get('/campgrounds/new', function(req, res){
  res.render('new.ejs');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});