const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/',(req,res)=>{
    res.send("Hello world!");
})

app.post('/add',(req,res)=>{
    const {num1,num2} = req.body;
    // const response ={}
    // console.log(response);
    // if(num1>1000000 || num2>1000000){
    //     response={
    //         status : "error",
    //         message : "Overflow"
    //     }
    // }else if(num1< -1000000 || num2< -1000000){
    //     response={
    //         status : "error",
    //         message : "Underflow"
    //     }
    // }else{
    //     response = {
    //         status: "success",
    //         message: "the sum of given two numbers",
    //         sum: num1+num2
    //     }
    // }
    const response ={
                        status: "success",
                        message: "the sum of given two numbers",
                        sum: num1+num2
                    }
    
    res.send(response);
})

app.post('/sub',(req,res)=>{
    const {num1,num2} = req.body;
    const response = {
            status: "success",
            message: "the difference of given two numbers",
            difference: num1-num2
        }
    res.send(response);
})

app.post('/multiply',(req,res)=>{
    const {num1,num2} = req.body;
    const response = {
            status: "success",
            message: "The product of given numbers",
            result: num1*num2
        }
    res.send(response);
})

app.post('/divide',(req,res)=>{
    const {num1,num2} = req.body;
    // const response = {}
    
    // if(num2==0){
    //     response = {
    //         status: "error",
    //         message: "Cannot divide by zero",
            
    //     }
    // }
    // if(num1>1000000 || num2>1000000){
    //     response={
    //         status : "error",
    //         message : "Overflow"
    //     }
    // }else if(num1<1000000 || num2<1000000){
    //     response={
    //         status : "error",
    //         message : "Underflow"
    //     }
    // }else{
    //     response = {
    //         status: "success",
    //         message: "The division  of given two numbers",
    //         result: num1/num2
    //     }
    // }
    const response = {
                        status: "success",
                        message: "The division  of given two numbers",
                        result: num1/num2
                    }
    res.send(response);
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;