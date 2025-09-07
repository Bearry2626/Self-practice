const somthing = ["cat", 10, 11.1, true];

console.log(somthing.length)
console.log(somthing[1])
console.log(somthing[somthing.length-1])

// 5. add two more items as
let NewObject = {name : "satang"}
let Newarr = somthing.concat(NewObject);
console.log(Newarr)

somthing .push({name : "stang"})
console.log(somthing)

// 6.print every items in  arry
for (i = 0;i < somthing.length; i++ ){
    console.log(`Index: ${i} Value: ${somthing[i]}`)
}

// 7. shrink array with any operations
// somthing.pop()
// console.log(somthing)
somthing.slice(1, 10)
console.log(somthing)

// 8. apply spread on string varible
let str = "Nanthakan"
const strCh = [...str] // ใช้ในกรณีนี้คือแยกตัวอักษรออกมาทีละตัว
console.log(strCh)

// 9. create array with new constructor
const arr1 = new Array()
console.log(arr1)
const arr2 = new Array(5)
console.log(arr2)
let arr3 = []
arr3[0] = 1
arr3[1] = 2
arr3[2] = 3
delete arr3[0]
console.log(arr3)

const arr10 = Array.of(10)
console.log(arr10)

delete somthing[1];  
console.log(somthing)
//ความต่างขอ arrays con กับ .of form

const [ ,, a,, ...z] = [5, 10, 15, 20, 25]
console.log(a)

console.log(z)

let letters = [...'Hello world']
let value = ''
for (let [index, letter] of letters.entries()) {
    if (index % 2 === 0)
        value += letter // letters at even indexes
}
console.log(letters.entries()) // "Hlowrd"

let it = letters.entries()
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
