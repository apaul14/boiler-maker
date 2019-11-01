const app = require('./server')
const {db} = require ('./server/db')
const PORT = 1337


db.sync()
  
    console.log('db synced')
    app.listen(PORT, () => console.log(`it worked on ${PORT}`))
  


  // db.sync() 
  //   console.log('db synced')
  //   app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
  // })