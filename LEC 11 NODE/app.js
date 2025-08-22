// const sum = require("./server")


// sum(10,20)


const fs = require("fs")


fs.writeFileSync("text.txt","hello world",(err)=>{
    if(err){
        console.log(err);
        
    }else {
        console.log("file was created");
        
    }
})



fs.readFileSync("text.txt", 'utf8',(err , data)=>{
    if(err){
        console.log(err);
        
    }else {
        console.log("file data : ", data);
        
    }
})


fs.appendFileSync("text.txt", " hello guys kaise" , (err)=>{
    if(err){
        console.log(err);
        
    }else {
        console.log("file was updated");

    }
})




setTimeout(()=>{
    fs.unlinkSync("text.txt",(err)=>{
    if(err){
        console.log(err);
        
    }else {
        console.log("file was delete");
        
    }
})
},2000)