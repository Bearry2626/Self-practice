// 1. Given the array [3, 5, 7, 2, 8], write code to find the sum of all numbers.

const arr = [3, 5, 7, 2, 8]
let sum = 0

for (let i = 0; i < arr.length; i ++){
    sum += arr[i]
}

console.log(sum)

// 2. Given the array [12, 45, 7, 23, 9], find the largest number.
const arr1 = [12, 45, 7, 23, 9]
let largest = arr1[0];

for (let i = 0; i < arr1.length; i++){
    if(arr1[i] > largest){
        largest = arr1[i]
    }
}
console.log(largest)

// 3. Given the array [1, 2, 3, 4, 5], create a new array containing the square of each number
const arr2 = [1, 2, 3, 4, 5]

let New_arr = []

for(let i = 0; i < arr2.length; i ++){
    New_arr.push(arr2[i] * arr2[i])
}
console.log(New_arr)