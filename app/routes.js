var express = require('express');
var path = require('path');
var router = express.Router();

module.exports = router;

//Route router
router.get('/', function(req, res){
  res.render('pages/home');
})

router.get('/about', function(req, res){
  //res.sendFile(path.join(__dirname, '../about.html')); // would be used if not using templating framework
  var users = [
    { name: 'John', email: 'John@gmail.com', avatar: 'http://i.pravatar.cc/300'},
    { name: 'Jane', email: 'Jane@gmail.com', avatar: 'http://i.pravatar.cc/302'},
    { name: 'Mike', email: 'Mike@gmail.com', avatar: 'http://i.pravatar.cc/304'},
    { name: 'Mary', email: 'Mary@gmail.com', avatar: 'http://i.pravatar.cc/306'}
  ];
  res.render('pages/about', { users: users }); //  { users: users } passes data directly for use in view files
})

router.get('/contact', function(req, res){
  res.render('pages/contact');
})
router.post('/contact', function(req, res){
  res.send("Thank you for contacting us, " +  req.body.name + "!");
})
