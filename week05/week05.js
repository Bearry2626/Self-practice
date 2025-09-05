// isArray
// true
console.log(Array.isArray([]))
console.log(Array.isArray(["a", 12, false]))
console.log(Array.isArray(new Array(2)))
// false
console.log(Array.isArray("[]"))
console.log(Array.isArray(1230))
console.log(Array.isArray(false))
console.log(Array.isArray("1"))
console.log(Array.isArray({}))

// mea array
const num = [1, 2 ,3]
const num1 = [3, 4, 5]
console.log(num.concat(num1))
console.log([...num,...num1])


console.log(num.toString())
console.log(num.join("."))


// includes
console.log("mangoteen".includes("go")) // หาคำในString นี้
console.log(["mangoteen", "mango"].includes("go")) // ไม่มีคำนี้ใน Arrays
console.log(["mangoteen", "mango"].includes("Mango")) // case sensitive

// reverse() - แก้ Original array 

// sort() - default เป็นString เรียน case sensitive ตัวใหญ่ไปตัวเล็ก แล้วค่อยเรียนตัวเล็ก
// กรณ๊เรียง String
const monrgs2 = ['March', 'jan', 'feb', 'Dec']
monrgs2.sort()
console.log(monrgs2) //ถ้าใช้แบบนี้ธรรมดาเฉยๆ sort จะเรียงตาม unicode ให้
// กรณีเรียง ใส่เป็น number 
const array14 = [1, 30, 4, 21, 100000]
array14.sort()
console.log(array14) //output จะเป็น [1, 100000, 21,30,4 ]
// ** ที่มันเรียงแบบนี้เพราะมันเรียงเป็น Text แปลงค่าทุกตัวเป็น string แล้วค่อย sort ตามลำดับ Unicode
// ถ้าอยาก sort เป็นตัวเลข ให้ใส่ comparator function
const array15 = [1, 30, 4, 21, 100000]
array15.sort((a, b) => a - b)  // ascending - การเรียงจากน้อยไปมาก
console.log(array15) // [1, 4, 21, 30, 100000]

const array16 = [1, 30, 4, 21, 100000]
array16.sort((a, b) => b - a)  // Descending - มากไปน้อย
console.log(array16) // [100000, 30, 21,4,1]

// indexOf
const arr = [10, 20, 30, 40]
console.log(arr.indexOf(40))

// findIndex 
const arr1 = [10, 20, 30, 40]
console.log(arr1.findIndex(num => num > 25))  

// find
const arr2 = [10, 20, 30, 40]
console.log(arr2.find(num => num > 25))  

// localeCompare - เปรียบเทียบข้อความ (string)

