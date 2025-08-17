//challenge#1
function calculateTotalPages(totalItems, itemsPerPage) {
    if(itemsPerPage <= 0 || totalItems == 0)
        throw Error("Items per page must be greater than zero.")

    return parseInt((totalItems + itemsPerPage - 1) / itemsPerPage);
}

console.log(calculateTotalPages(10, 3))
console.log(calculateTotalPages(25, 5))
console.log(calculateTotalPages(10, 10))
// console.log(calculateTotalPages(10, 0)) 
// console.log(calculateTotalPages(0, 5))

// challenge #2
function ComapreStudent(object1 ,object2){
    return object1.name.toLowerCase() === object2.name.toLowerCase() && object1.id === object2.id
}

console.log(ComapreStudent({name: "hhhh", id: 1}, {name: "HHHH", id: 1}))
console.log(ComapreStudent({name: "hhhh", id: 1}, {name: "hhhh", id: 1}))




const per1 = {fn: "Nanthakan", ln: "Sukkasem", age: 20}
console.log(per1.fn)
console.log(per1["ln"])

for (const key in per1) {
    console.log(key)
    console.log(per1.key) // ---> . ตัวแปรไม่ได้ ต้อง . propoty
    console.log(per1[key])
}

// challenge #3 shallow Equality
let book1 = {
    isbn: 123456789,
    title: "JavaScript"
}
let book2 = {
    isbn: 123456789,
    title: "JavaScript"
}

function shallowEquality(object1, object2){
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if(keys1.length !== keys2.length){
        return false
    } 
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false  
        }
    }
    return true
}

console.log("shallw equality: " + shallowEquality(book1, book2))
// shallow Equality (สรุปผลการทดลองการเรียนรู้)
// 1. ประกาศ book1 และ book2 ออกมามี objectที่เหมือนกันทั้งหมด
// 2. ภายในฟังก์ชั่นใช้ Object.keys() เพื่อจะเอาarray ของ key ทั้งหมดใน object
// 3. ในส่วนของ if จะเช็คจำนวนของ keys book1และ 2 ว่ามีค่าเท่ากันมั้ย ถ้าไม่เท่ากันจะ return false ทันที
// 4. for...of keys1 จะวนลูปดึง ค่าแต่ละตัวใน array keys1 ออกมา
//     ใน if ใช้ key ไปเข้าถึงค่าของ obj1 และ obj2 ---> เทียบค่า property ที่ชื่อเดียวกันขอทั้งสอง obj
//     ถ้าไม่เท่ากันจะ return false ทันที
// 5. ถ้าค่าเท่ากันทั้งหมด จะได้ผลเป็น เท่ากับ true