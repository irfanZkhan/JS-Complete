const name ="irfan"
const repoCount=40

//use back slashes and inject variable where you want 
// console.log(`My name ${name} and my repo on git hub are ${repoCount} `);


 const myname = new String("irfan haider")

// console.log( myname.length)
// console.log( myname.toUpperCase())
// console.log( myname.charAt(9))
// console.log( myname.indexOf('a'))

// const substring=myname.substring(0,5)
// console.log( substring)

// const slice=myname.slice(-10,5)
// console.log( slice)


const usetrim="            irfan haider        "
console.log(usetrim.trim())// trim start and end 
console.log(usetrim.replace('a','-'))//first a replace
console.log(usetrim.replaceAll('a','-'))//all a replace
console.log(usetrim.includes('haider'))// word check avaible in given text or not 