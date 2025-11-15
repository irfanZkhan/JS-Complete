
//there is a another programer declar var with value of c 300
//there is a another programer declar var with value of a 300
let a=300

if(true){
    let a =10
       const b=20
          var  c =30

         //  console.log("inner block "+a)
}

// console.log("out side the block "+a)
//console.log(b)
//console.log(c) // but still output is 30 ineasted 300




//***************            Nasted Scope             ************************ */

function one(){
   const userName= "irfan haider from functino One"
  
   function two(){
      const web ="youtube.com"
      // console.log(userName)

   }
//  console.log(web)
   // two()
}

one()






if(true){
   const userName="irfan haider"

   if(userName==="irfan haider"){
      const web="youtube.com"
      console.log(web+userName)
   }
   console.log(web)

}
console.log(userName)