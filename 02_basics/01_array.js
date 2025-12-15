//array
//javascript arrays are resizable

const myArr=[0,1,2,3,4,5]
const myArr2=new Array(1,2,3)
// console.log(myArr2);
myArr.push(6)
myArr.pop()
console.log(myArr);
myArr.unshift(10) //add begining
myArr.shift() //remove begining
console.log(myArr);
// console.log(myArr.includes(8))
// console.log(myArr.indexO f(8))

const newArray=myArr.join()


//slice or splice
console.log("A",myArr);
const myn1=myArr.slice(1,4)
console.log("B",myn1);
const myn2=myArr.splice(1,4)
console.log(myn2);







