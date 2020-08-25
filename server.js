const express = require('express')
const path = require('path')

const app = express()

// Static folder
app.use()






app.listen(5000, (err) =>{
    if(err){
        throw err
    }else{
        console.log('SERVER IS UP AND RUNNING...')
    }   
}) 
