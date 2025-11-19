// create a object 
 const user={
    userName: "irfan haider",
    FatherName : "Munir Hussain ",
    Email : "irfanhassam786@gamil.com",

    WelcomMessage : function(){
        console.log(`${this.userName} Welcome to this website `)
        console.log(this)

    }
 }
//  user.WelcomMessage()
//  console.log(this)





// function chai(){
//     userName= "irfan khan balooch"
//     console.log(this.userName)
// }

// chai()





const chai=() =>{
    console.log(this)


}
chai()

 