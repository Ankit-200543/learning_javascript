function avg(x,y){
return (x+y)/2
}


function factorial(x){
    if(x==0){
        return 1;
    }
return x * factorial(x - 1);
}
setTimeout(function ok(){
    console.log("Run in every 2 Seconds ")
},2000);
// 


let a=1;
let b=2;
console.log(factorial(5))
console.log((avg(a,b)))