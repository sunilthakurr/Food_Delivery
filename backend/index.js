 

const express = require('express')
const app = express()
const port = 5000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

 

app.use('/api/auth', require('./Routes/Auth'));

// app.listen(port, () => {
//   console.log(`Example app listening on http://localhost:${port}`)
// })

const initializeDatabase = require('./db');

// Initialize the database and start the server
initializeDatabase(function(err, data, CatData) {
  if (err) {
    console.log(err);
  } else {
    global.foodData = data;
    global.foodCategory = CatData;

    // You can now start the server after initializing the database
    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  }
});