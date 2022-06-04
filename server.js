const express = require ('express')
const mongoose= require ('mongoose')
 const morgan =  require ('morgan')
 const bodyParser =  require ('body-parser') 

const EmployeeRoute= require ('./routes/employee')

  mongoose.connect ('mongodb://localhost:27017/crud',{useNewUrlParser: true , useUnifiedTopology: true})
  const db = mongoose.connection 
  db.on ( 'error' , (err) => { 
      console.log (err) 
    })
       db.once ( 'open' ,() => { 
           console.log (' Database Connection Established !')
       }) 
       const app=express()

       app.use (morgan( 'dev'))
       
  app.use ( bodyParser.urlencoded ( { extended : true } ))
  app.use( bodyParser.json())
  

  app.listen(8000,() =>{
      console.log (`server is running on port 5000`)
  })
    
  app.use('/api/employee',EmployeeRoute)