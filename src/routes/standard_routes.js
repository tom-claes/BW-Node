let express = require('express')
let router = express.Router()  // We gaan een router van de express instance nodig hebben
const path = require('path');

// onze code

module.exports = router  // Dit laat ons toe om onze router te importeren in onze index.js file

// ROUTES

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../../public/HTML/homepage.html');
    res.sendFile(filePath);
  })

  