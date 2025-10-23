//Operators
{
let a=20;
let b=20;
console.log("the sum of two numbers is "+ (a+b));
console.log("the difference of two numbers is "+ (a-b));
console.log("the product of two numbers is "+ (a*b));
//it gives quotient
console.log("the divison of two numbers is "+ (a/b));

//it gives remainder
console.log("the remainder of two numbers is "+ (a%b));

//it gives power
console.log("20**20 == ", (a**2));
}

 


//unary Operators

/*Increment */
//post Increment
{
    let a=1;
   console.log(" a++ = "+a++);//1
console.log(a)//2 
}


//pre Increment
{
let a=1
console.log(" ++a = " , ++a);//2
console.log(a)//2
}


//it is same also for Decreement


//Assigment operator
{
 let t=1;
t+=4;
console.log(t)//5   
}
{
   let t=1;
   t*=5
console.log(t)//25 
}





//comparison operators
//Equal to "==" for compare only value
//Triple Equal to "===" for compare value along with their Datatypes
//Not Equal to "!="
//<,>,<=,>=
{
    let a=10
    let astr="10"
    let b=20
    console.log("10==20 ",a==b)//false
    console.log("10>20 ", a>b)//false
    console.log("10 < 20 " , a<b)//True
    console.log("10<=20 ",a<=b)//True if any any one condition is true
    console.log("10 !=20",a!=b)
    console.log("10==String(10)",a==astr);//true because it doesnt check check datatype


}

//logical Operators
{
    let a=6;
    let b=10;
    {
        //logical AND
    let cond1=a<b;
    let cond2=a==6;
    console.log("6<10 && 6==6 ",cond1 && cond2)
    }
    {
     //logical OR
     let cond1=a>b;
    let cond2=a==6;
    console.log(cond1 || cond2)
 
    }

    

    
}

