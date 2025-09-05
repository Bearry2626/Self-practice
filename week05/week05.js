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
// กรณีเรียง NUmber 
const array14 = [1, 30, 4, 21, 100000]
array14.sort()
console.log(array14) //output จะเป็น [1, 100000, 21,30,4 ]

// localeCompare - เปรียบเทียบข้อความ (string)

