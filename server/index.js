const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel =  require('./models/Employee')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employee"); //mongodb://localhost:27017/

app.post('/register',  (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is running on port 3001");
})