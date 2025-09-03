console.log(Array.isArray([]))
console.log(Array.isArray(["a", 12, false]))
console.log(Array.isArray(new Array(2)))



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

console.log("mangoteen".includes("go"))
console.log(["mangoteen", "mango"].includes("go"))
console.log(["mangoteen", "mango"].includes("Mango"))

// reverse() - แก้ Original array 
// sort() - default เป็นString เรียน case sensitive ตัวใหญ่ไปตัวเล็ก แล้วค่อยเรียนตัวเล็ก
// localeCompare - เปรียบเทียบข้อความ (string)

