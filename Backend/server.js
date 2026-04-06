const express=require('express')

const app=express;

app.get('/',(req,res){
    res.send("welcomoe to connect")
});

app.listen(4000,()=>{
    console.log("listening on port 4000")
})