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
  const mobileNO = req.body.mobileNO;
  const email = req.body.email;
  const income = req.body.income;
  console.log("Received");
  //console.log("First Name: " + Fname);
  //console.log("Last Name: " + Lname);
  //res.send("Data received");
  //res.send("Data received</br>" + "First Name: " + Fname + "</br>Last Name: " + Lname);
  res.send([
    'Data received',
    `First Name: ${Fname}`,
    `Last Name: ${Lname}`,
    `Mobile Number: ${mobileNO}`,
    `E-mail: ${email}`,
    `Income: ${income}`,
  ]);

});
 
app.listen(3001);