const express = require('express');
 
const app = express();
 
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
 
app.post("/", (req, res) => {
  const Fname = req.body.Fname;
  const Lname = req.body.Lname;
  console.log("First Name: " + Fname);
  console.log("Last Name: " + Lname);
  //res.send("Data received");
  res.send("Data received</br>" + "First Name: " + Fname + "</br>Last Name: " + Lname);
  //res.render("Test Date Received");

});
 
app.listen(3001);