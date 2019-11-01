const path = require('path')
const express = require('express')
// const session = require('express-session')
// const passport = require('passport')
const volleyball = require('volleyball')
const app = express()


// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))

// app.use(passport.initialize())
// app.use(passport.session())

// passport.serializeUser((user, done) => {
//   try {
//     done(null, user.id);
//   } catch (err) {
//     done(err);
//   }
// })

// passport.deserializeUser((id, done) => {
//   Example.findById(id)
//     .then(user => done(null, user))
//     .catch(done);
// })


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(volleyball)
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api'))

//routes/middleware go here




app.get('*',(req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } catch (error) {
    console.log(error)
  }
})

app.use(function (err, req, res) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

module.exports = app