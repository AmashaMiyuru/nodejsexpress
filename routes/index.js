const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome to University of Colombo School of Computing!',   
  });
});

module.exports = router;