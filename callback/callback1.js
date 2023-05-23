const mix=()=>{
    console.log("mix parata mix");
};
const parata=()  => {
console.log("toste");
setTimeout(() => {
    callback();
    console.log("parata ready")

}, 1000)
};
const callback=()=>{
    alert("vaaga sapdalam*****")
}
const grayvi=()=>{
    console.log(" prepare   grayvi");
};
mix();
parata(callback);
grayvi();