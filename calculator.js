const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/calculate", (req,res,next)=>{
    res.sendFile(__dirname + "/calculate.html");
});

app.get("/math", (req,res,next)=>{
    res.sendFile(__dirname + "/math.html");
});
//this is a message
app.post("/", (req,res,next)=>{
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var total = num1 + num2;
    console.log(total);
    res.send("the answer is " + total +" </br> <a href='/calculate'>Do another calculation?</a>");
    
});

app.get("/", (req, res, next)=>{
    res.send('<p>Here go the the calculator page<a href="/calculate">Calculator Page</a></p>')
    //res.send('<form action="/" method="POST"><input type="text" name ="num1" placeholder="First Number"></input><input type="text" name ="num2" placeholder="Second Number"></input><button type="submit" name="submit">Result</button></form>'
    //        );
});

app.listen(3000);