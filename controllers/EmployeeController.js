const { response } = require('express')
const Employee = require('../models/Employee')

//show list
const index=(req,res,next)=>{
    Employee.find()
    .then(response=>{
        res.json({
           response
         // message:'show successfully'
        })
    })
    .catch(error =>{
res.json({
    message:'An error occurd'

})
    
        
})
}
//show single employe
const show=(req,res,next)=>{
    let employeeID=req.body.employeeID
    Employee.findById(employeeID)
    .then(response=> {
        res.json({
            response
        })
    })
    .catch(error => {
res.json({
    message:'An error occurd'

})
})
}
//add new employee

const store=(req,res,next)=>{
    let employee=new Employee({
        name:req.body.name,
        address:req.body.address,
        id:req.body.id,
        salary:req.body.salary,
        age:req.body.age
    })
    employee.save()
    .then(response =>{
        res.json({
            message:'employee added successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occurd'
        
        })
    })
}

//update
const update =(req,res,next)=>{
    let employeeID= req.body.employeeID
    let updatedData={
        name:req.body.name,
        address:req.body.address,
        id:req.body.id,
        salary:req.body.salary,
        age:req.body.age

    }
    Employee.findByIdAndUpdate(employeeID,{$set:updatedData})
    .then(() =>{
        res.json({
            message:'employee updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occurd'
        
        })
    })
}

//delete
const destroy =(req,res,next)=>{
  // let id=req.body.id

    let employeeID= req.body.employeeID
  //  employee.findByIdAndRemove(id)
  Employee.findByIdAndRemove(employeeID)
    .then(() =>{
        res.json({
            message:'employee deleteted successfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An error occurd'
        
        })
    })

}
module.exports={
    index, show, store, update, destroy
}