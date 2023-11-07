/* !Initialisatie v.d. app! */
let express = require('express');    // We require'n de express module
let app = express()                 // We starten een nieuwe express app en maken dit beschikbaar in de variabele app
const mysql = require('mysql2');
const multer = require('multer');
const fs = require('fs');
let routes = require('./routes/routes');
/* !Einde initialisatie v.d. app! */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* !Webserver maken! */
const PORT = 3000;                  // We kiezen op welke poort we de server willen laten runnen
app.use(express.static('public'))   // We linken de public folder aan de webroot, zodat alles wat in de public staat beschikbaar zal zijn in de browser
app.listen(PORT, () => console.info(`Server is live on port: ${PORT}`))  // We starten de server op de port die we hebben gekozen en loggen in de console dat de app effectief is gestart
/* !Einde webserver maken! */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Routes initialiseren */
//let var = require('./routes/naam_file')    // Importeren van de router module
//app.use(route_var_name)           // To tell the program to use this route

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* !Routes importeren! */
app.use(routes)
/* !Einde routes importeren! */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* !Connectie met databank aanmaken! */
// Read the database configuration from database.json.
const dbConfig = JSON.parse(fs.readFileSync('database.json'));

// Set up a MySQL database connection.
const db = mysql.createConnection(dbConfig);


db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
});
/* !Einde connectie met databank aanmaken! */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* !Artiest aanmaken! */
// Set up the multer middleware to handle image uploads.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Serve the HTML form for image upload.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle the image upload and store it in the database.
app.post('/upload', upload.single('image'), (req, res) => {
  const imageFileName = req.file.filename;
  const artist_stagename = req.body.artist_stagename

  // Insert image information into the database.
  const sql = 'INSERT INTO artists (stagename, image_path) VALUES (?, ?)';
  db.query(sql, [artist_stagename, imageFileName], (err, result) => {
    if (err) {
      console.error('Error inserting artist and image into the database: ' + err);
      return;
    }
    res.send('Artist and image uploaded and stored in the database successfully');
  });
});
/* !Einde artiest aanmaken! */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* !Festival aanmaken! */
app.post('/upload/form1', (req, res) => {
  const artist_stagename = req.body.artist_stagename;

  // Insert artist data into the database.
  const sql = 'INSERT INTO artists (stagename) VALUES (?)';
  db.query(sql, [artist_stagename], (err, result) => {
    if (err) {
      console.error('Error inserting artist data into the database: ' + err);
      return res.status(500).send('Error inserting data into the database');
    }
    res.send('Artist data inserted into the database successfully');
  });
});
/* !Einde festival aanmaken! */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* !Concert aanmaken! */
app.post('/upload/form2', (req, res) => {
  const other_data = req.body.other_data;

  // Insert other data into the database (for the second form).
  const sql = 'INSERT INTO other_table (other_column) VALUES (?)';
  db.query(sql, [other_data], (err, result) => {
    if (err) {
      console.error('Error inserting other data into the database: ' + err);
      return res.status(500).send('Error inserting data into the database');
    }
    res.send('Other data inserted into the database successfully');
  });
});
/* !Einde concert aanmaken! */