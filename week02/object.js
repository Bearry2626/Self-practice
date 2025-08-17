// Object
const pe = {
  cat: {
    name: "mongkol",
    age: 20
  }
};

// for...in loop ใน JavaScript เพื่อวนลูป property (key) ของ object
for (const key in pets) {
  console.log(key)
  console.log(pets[key])
}

// ค่าของสองตัวนี้จะไม่เท่ากัน
const std = {id:1, name: "nnnn"} //<--- เก็บ referrance locationในการเข้าถึงข้อมูล
const std1 = {id:1, name: "nnnn"}

console.log(std == std1)
console.log(std === std1)
console.log(Object.is(std,std1))


function dosametiong (Object){
    Object = {id: 1,
    name: "yoyo"}
    Object.name = 'XXX'
}
const pet = {
    id: 1,
    name: "yoyo"
}

console.log(pet.name)
dosametiong (pet)
console.log(pet.name)



const std2 = {id:1, name:"Somchi", address: {no: 111, city: "Bangkok"}}
let {name: fullname, id, address:{city: myAddress}} = std2

console.log(myAddress)

// 1. Object literals
const book={isbn: 1234 , isbn:7890} //สร้างแบบ literals ถ้าคีย์ซ้ำไ แต่จะมันใช้ Value ตัวสุดท้าย

//2. Constructor Functions
function Person(first, last, age, eye) { //----> ชื่อfunction ขึ้นต้นด้วยตัวพิมพ์ใหญ่
  this.firstName = first;       //----> มี this
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const my = new Person("Nanthakan", "Sukkasem", 20, "Brow") // ----> สามารถสร้างโดยใช้ Template ได้เลย
console.log(my)

// 3. ES6 Classes
class pets{
    constructor(name, age, type){ //--> รับ Parametor
        this.name = name // this --> property ของ object จะมีอะไรบ้าง
        this.age = age
        this.type = type
    } 
}
const NewPets = new pets("sa", 7, "cat")
console.log(NewPets)


// 4. object.create(existing object)
const MyNewPets = Object.create(pets)
console.log(MyNewPets.name)
MyNewPets.ID = 67130500093
console.log(MyNewPets)

// . and []
const per1 = {fn: "Nanthakan", ln: "Sukkasem", age: 20}
console.log(per1.fn)
console.log(per1["ln"])

for (const key in per1) {
    console.log(key)
    console.log(per1.key) // ---> . ตัวแปรไม่ได้ ต้อง . propoty
    console.log(per1[key])
}


// referance
function dosametiong(obj){
  obj = {id:1 , name: "Y"}
  obj.name = "xxx"
}
const pet1 = {id:1, name:"Yoyo"}
console.log(pet.name)
dosametiong(pet)
console.log(pet.name)