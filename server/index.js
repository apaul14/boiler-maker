const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, '../public')));

//routes/middleware go here




// app.get('*',(req, res) => {
//   try {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
//   } catch (error) {
//     console.log(error)
//   }
 
// });

module.exports = app