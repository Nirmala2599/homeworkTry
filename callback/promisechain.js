let p= new Promise((res,rej) =>{
    
    setTimeout(()=>{
       res(10);
    
    },2000);
});
p.then((val) => {
        console.log(val);
        return val*2;
    },
    (err) =>{
        console.log(err);
    }
)
.then((val) => { 
    console.log(val);
    return val*3;
})
.then((val) =>{
    console.log(val);
    return val*4;
})
.then((val) => {
    console.log(val);
});