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





// function UserLoginMessage(username = "Demii values "){
//     if(username===undefined){

//         console.log("please pass a Arguments")
//         return


//     }
//     else{
//             return `${username} just loggin Right Now `
//     }


// }


// console.log(UserLoginMessage())




// //value1 store 10 and value2 store 20 remaining all values in 
// function CalculateCardPrice(value1, value2, ...num){
//     // return value1,value2, num
//     return num

// }

// console.log("value1 = "  ,value1)
// console.log("value2 = " ,value2)
//console.log(CalculateCardPrice(10, 20 ,30,40,60))


const user={
    userName:"iran haider ",
    price: 999

}

function objectHandle(anyobject){
    console.log(`this is a user name ${anyobject.userName} and this is the price ${anyobject.price}`)

}

objectHandle(user)