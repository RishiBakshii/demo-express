const express=require("express")


const server=express()


server.get("/",(req,res)=>{
    res.status(200).json({message:"server running no errors!"})
})


server.listen(8000,()=>{
    console.log(`server started ~ http://localhost:8000`);
})