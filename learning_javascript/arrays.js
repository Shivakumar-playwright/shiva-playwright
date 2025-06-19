const arr=[1,2,3,4,5,6,7,8,9]
console.log(arr.length) //
console.log(arr.push(10)) //add element at the end of the array
console.log(arr.unshift(0)) //add element at the beginning of the array
console.log(arr)
console.log(arr.pop()) //remove element from the end of the array
console.log(arr.shift()) //remove element from the beginning of the array
console.log(arr)
console.log(arr.slice(1,3))
console.log(arr.splice(1,4))
console.log(arr.includes(9))

//map:create new array and take each and every element of an array
newarr=arr.map((e)=>{
    return e**2;
})
console.log(newarr)

//filter:create new array and filter elements basen on certain condition

newarr1=arr.filter((e)=>{
    return e%2===0
})
console.log(newarr1)

//reduce:reduce array in to single value
newarr2=arr.reduce((pre,cur)=>{
    return pre+cur;
})
console.log(newarr2)

//EXAMPLE-OCCURANE OF AN ARRAY
let fruits=["apple","banana","orange","banana","apple"]
let count=fruits.reduce((acc,fruit)=>{
  if(acc[fruit]){
    acc[fruit]+=1
  }else{
    acc[fruit]=1
  }
  return acc
},{}) //{}->create new object to store the counts
console.log(count)

let numbers= [1,2,3,4,56,7,89,99,1]

let maximum=numbers.reduce((acc,cur)=>{
  return acc+cur;
},0)
console.log(maximum)


const num = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = num[0];
let min = num[0];

for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
  if (num[i] < min) {
    min = num[i];
  }
}

console.log("Max:", max);
console.log("Min:", min);

console.log(arr.sort().reverse())