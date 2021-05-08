require("dotenv").config();
const path = require("path")
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Employee = require("./Backend/models/Employee")

const app = express();
app.use(express.json());

     mongoose.connect(
    process.env.MONGO_URI ,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);


// app.get("/", (req, res) => {
//   res.send("Hey There , Greetings From The Server. Have a Good Day :)")
    
// })
app.get("/employee", (req, res) => {
    
  Employee.find({  })
  .then((data) => {
      res.json(data);
  })
  .catch((error) => {
      console.log('error: ', error);
  });
  });
  
  
app.get("/task", (req, res) => {
    res.json({ message: "This is the Tasks page" });
  });
  
  app.post("/task", (req, res) => {
    const { fullName,
        email,
        department,
        city,
        tasktitle,
        taskdeadline, } = req.body;

    let newEmployee = new Employee({ 
        fullName,
        email,
        department,
        city,
        tasktitle,
        taskdeadline,
    })
    newEmployee.save();
    console.log("Employees details and tasks has been saved")
    
  });
  

  if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get("*", (req, res)=>{
     res.sendFile(path.join(__dirname, 'frontend',"build","index.html"));
    })
  }else{
    app.get("/", (req,res)=>{
      res.send("Hey There , Greetings From The Server. Have a Good Day :)")
    })
  }


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));