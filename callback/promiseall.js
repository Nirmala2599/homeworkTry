let p1=new Promise((res,rej) =>{
setTimeout(()=>{
        console.log("1st promise");
        res("10");
    },2000);
});
let p2=new Promise((res,rej) =>{
    setTimeout(()=>{
            console.log("2nd promise");
            res("10");
        },2000);
    });
    let p3 =new Promise((res,rej) =>{
        setTimeout(()=>{
                console.log("3rd promise");
                res("10");
            },2000);
        });
        