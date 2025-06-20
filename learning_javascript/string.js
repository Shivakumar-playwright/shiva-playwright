let str ="i am learning javascript"
let str2="WE ARE PREPARING FOR JOB"
let string="shiva\n kumar"
let string2="raju\t sir"
console.log(string)
console.log(string2)
console.log(str.length)
console.log(str.toUpperCase())
console.log(str2.toLowerCase())
console.log(str.replace("am","is"))
console.log(str.trimStart())
console.log(str.trimEnd())
console.log(str.trim())
console.log(str.charAt(3))
console.log(str.substring(0,4))
console.log(str.indexOf("t"))
console.log(str.includes("script"))
console.log(str.includes("shiva"))
console.log(str.split("").reverse().join(""))

//template literals

let strr="shiva"
let strr2="playwright"
let strr3=`my name is ${strr} i am learning ${strr2}`
console.log(strr3)