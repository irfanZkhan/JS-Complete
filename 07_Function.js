function sayMyName(){

    console.log("irfan");
       console.log("Haider");
          console.log("baloch")
}


//sayMyName()

//on this stage number1 and number2 is a parameter
// function AddtwoNumbers(number1, number2){

   
//     console.log(number1 + number2)

// }

function AddtwoNumbers(number1, number2){

   
    let result = number1+number2
   // console.log("irfan")
    return  result 

}
    
// on this stage 12, 24 are the argument
const result =  AddtwoNumbers(12,24)
// console.log("Result :",result)





function UserLoginMessage(username = "Demii values "){
    if(username===undefined){

        console.log("please pass a Arguments")
        return


    }
    else{
            return `${username} just loggin Right Now `
    }


}


console.log(UserLoginMessage())

