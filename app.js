var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// var campgrounds = [
//   {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
//   {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"},
//   {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
//   {name: "Granite Hill", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
//   {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"},
//   {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
//   {name: "Granite Hill", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
//   {name: "Mountain Goat's Rest", image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"}
// ]

mongoose.connect("mongodb://localhost/country_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// SCHEMA SETUP ///////////////////////////////////////////////////////
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

Campground.create(
  {
    name: "Salmon Creek",
    image:  "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"
  
  }, function(err, campground){  
      if(err){
        console.log(err);
      } else {
        console.log("NEWLY CREATED CAMPGROUND: ");
        console.log(campground);
      }
});

app.get('/', function (req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res){
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render('campgrounds', {campgrounds:allCampgrounds});
    }
  });
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