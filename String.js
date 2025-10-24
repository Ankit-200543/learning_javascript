let userName="Ankit"
for(let i of userName){
    console.log(i)
}

let lengthOfString=userName.length;
console.log("The length of string ",lengthOfString)

//template string
console.log(`the length of string is ${lengthOfString}`)

/*\n */
console.log("Ankit \nKumar")
/*---this is use for to move cursor on next line */

/*---\t---*/
console.log("Ankit \tkumar")

/*---this is use to give a TAB space---*/



//String Methods
//1.Str.toUpperCase()
{
    let str="gla"
    console.log(str.toUpperCase())//GLA
}
//2.toLowecase
{
    let str="UNIVERSITY"
    console.log(str.toLowerCase())//university
}
//3.str.Trim()
{
    let str="        ankit       "
    console.log(str.trim())
    //it will remove extra whitespace from the beginning and End of the string
}
//4.str.slice
{
    let str="GLA University"
    console.log(str.slice(0,10))//GLA Univer


    //it gives the part of String from starting position to End position and if we doesnt give end value then it will print all from the end position same 
}
//5.String Concatination
{
    let firstName="Ankit"
    let secondName="\tKumar"
    console.log(firstName.concat(secondName))
}
//6.replace Method
{
    let color="Yellow"
    console.log(color.replace("Y","n"))
    console.log(color.replaceAll("l","p"))
}


