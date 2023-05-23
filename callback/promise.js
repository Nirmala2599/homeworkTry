let promiseObj= new Promise((resolve,reject)=>{
    console.log("Getting vale from API!!!");
    setTimeout(()=>{
resolve("Resolved!!");
reject(new Error("Error occured!!"));
    },1000);
});
promiseObj.then( (val)=>{
     console.log(`Value recived from promise ${val}`);
},
(err)=>{
    console.log(`Error occured from promise ${err}`);
}
);