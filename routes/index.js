var express = require('express');
var router = express.Router();

const messages = [
  {
    message: 'Run to the hills!',
    user: 'Lemmie',
    added: new Date()

  },
  {
    message: 'We are all really looking forward to it.',
    user: 'Sarah May',
    added: new Date()

  },
  {
    message: 'How bout them apples?!?',
    user: 'Dathew Meman',
    added: new Date()

  },
  {
    message: "I don't really understand how this works yet",
    user: 'Cary',
    added: new Date()

  }
]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', explainer: 'Check out all the action!', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add a new message!' });
});

router.post('/new', (req, res)=> {
  const newMessage = {
    message: req.body.message,
    user: req.body.name,
    added: new Date()
  }

  messages.push(newMessage)
  res.redirect("/")
  

})

module.exports = router;
