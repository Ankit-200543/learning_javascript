//conditional statement


//if else
let age=20;
if(age>=18){
    console.log("You can vote")
}
else if(age<=10){
    console.log("You are Under age ")
}
else{
console.log("you cant vote")
}

//ternary operator
console.log(age>18 ? "adult" : "not adult");



//Switch case
{
    let fruit="mangoes";
    switch (fruit) {
        case "apple":
                console.log("You can eat Apple")
            break;   
            case "mangoes":
                console.log("You can eat MAngoes")

                break;
        default:
    }
}


let num1=98;
// console.log(num1%5==0 ? "yes":"No")
if(num1>=80 && num1<=100){
    console.log("you got Grade A")
}
else if(num1>=60 && num1<80){
    console.log("you got Grade B")

}
else{
        console.log("you are Fail")

}

