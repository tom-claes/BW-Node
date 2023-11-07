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

router.get('/searchresults', (req, res) => {
  const filePath = path.join(__dirname, '../../public/HTML/searchresultpage.html');
  res.sendFile(filePath);
})

router.get('/artists', (req, res) => {
  const filePath = path.join(__dirname, '../../public/HTML/artistpage.html');
  res.sendFile(filePath);
})

router.get('/concerts', (req, res) => {
  const filePath = path.join(__dirname, '../../public/HTML/concertpage.html');
  res.sendFile(filePath);
})

router.get('/festivals', (req, res) => {
  const filePath = path.join(__dirname, '../../public/HTML/festivalpage.html');
  res.sendFile(filePath);
})

router.get('/add', (req, res) => {
  const filePath = path.join(__dirname, '../../public/HTML/adddata.html');
  res.sendFile(filePath);
})



  