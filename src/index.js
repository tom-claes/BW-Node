/* Initialisatie v.d. app */
let express = require('express')    // We require'n de express module
let app = express()                 // We starten een nieuwe express app en maken dit beschikbaar in de variabele app

/* Webserver maken */
const PORT = 3000;                  // We kiezen op welke poort we de server willen laten runnen
app.use(express.static('public'))   // We linken de public folder aan de webroot, zodat alles wat in de public staat beschikbaar zal zijn in de browser
app.listen(PORT, () => console.info('Server is live'))  // We starten de server op de port die we hebben gekozen en loggen in de console dat de app effectief is gestart

/* Routes initialiseren */
//let var = require('./routes/naam_file')    // Importeren van de router module
//app.use(route_var_name)           // To tell the program to use this route


let standard_routes = require('./routes/standard_routes')

app.use(standard_routes)

