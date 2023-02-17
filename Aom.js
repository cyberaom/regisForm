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

  // res.send(
  //   "Data received</br> First Name: " + Fname + 
  //   "</br>Last Name: " + Lname +
  //   "</br>Mobile Number: " + mobileNO +
  //   "</br>E-mail: " + email +
  //   "</br>Income: " + income +"</br>"
  //   );

  res.send(`Data received</br> First Name: ${Fname}
            </br>Last Name: ${Lname}
            </br>Mobile Number: ${mobileNO}
            </br>E-mail: ${email}
            </br>Income: ${income}
            </br>test
  
  `);

});
 
app.listen(3001);