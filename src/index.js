let express = require('express')    // We require'n de express module
let app = express()                 // We starten een nieuwe express app en maken dit beschikbaar in de variabele app
const PORT = 3000;                  // We kiezen op welke poort we de server willen laten runnen
let hondRoute = require('./routes/hond')    // Importeren van de router module

app.use(express.static('public'))   // We linken de public folder aan de webroot, zodat alles wat in de public staat beschikbaar zal zijn in de browser
app.listen(PORT, () => console.info('Server gestart'))  // We starten de server op de port die we hebben gekozen en loggen in de console dat de app effectief is gestart

app.use(hondRoute)                  //Zeggen aan de app dat het de router moet gebruiken