const express=require('express');
const path=require('path');
const app=express();
const port=3000;

app.use(express.static(path.join(__dirname,'/views')));

app.get('/api/hello',(req,res)=>{
    res.json({message:'Hello'});
});

app.get('/api/goodbye',(req,res)=>{
    res.join({message:'Goodbye'})
});

app.get('/api/data',(req,res)=>{
    res.join({data:[1,2,3,4,5]})
});
app.get('/api/user',(req,res)=>{
    res.join({user:{name:'Roy',age:20}})
});

app.listen(port,()=>{
    console.log('http://localhost:3000')
})
