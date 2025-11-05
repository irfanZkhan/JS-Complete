//const TinderUser= new Object()// this is is a sigleton object 


const TinderUser={}// this is simple object 


TinderUser.UserName="Irfan Haider "
TinderUser.id="abc123"
TinderUser.Gmail="irfanhaider@gamil.com"


const regularUser={
    fullName:{
        FirstNmae:"irfan",
        LastName:"Haider"
    }
}

//console.log(regularUser.fullName.LastName) 



//how to merg or add two Objects
 
const obj1={1:"irfan ", 2:"Haider ", 3:"khan"}
const obj2={4:"Farhan ", 5:"Haider", 6:"Baloch" }

//const ObjectFinal= Object.assign({},obj1,obj2)//  why i put {} it will make sure add the both object 

//use spread for merg two object 
const ObjectMergSpreard={...obj1, ...obj2}
//console.log (ObjectMergSpreard)



console.log(TinderUser);

console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser))

