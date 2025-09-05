// Write function getPassingNames that takes an arrays of student objects and returns an arrays of uppercase names of student wgo passes the exam
function getPassingNames(students) {
  return students.filter(student => student.score >= 70).map(student => student.name.toUpperCase());
}
const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];
const passingNames = getPassingNames(studentScores);
console.log(passingNames); 


// เรียงจากมากไปน้อยด้วย sort() เป็นแบบตัวเลข
// ทัศนัยภูวกล 093
const array14 = [1, 30, 4 , 21, 10000]
array14.sort((a,b) => b-a) // compare function 
console.log(array14)

const students = [
    {id: 66500102, name:"Sude", gpa:2.5},
    {id: 66500555, name:"ada", gpa:2.8},
    {id: 665001589, name:"Aornchai", gpa:3.25},
    {id: 66500102, name:"Pornsak", gpa:3.8}
]

students.sort((a,b) => a.name.localeCompare(b.name))
console.log(students)


// 1. tranform individual export to export list 
function echo(msg) {
  return msg
}

// export default 
function getLength(str) {
  return str.length
}

const GPAAverageb = 3.0

class Book {
  constructor(isbn) {
    this.isbn = isbn
  }
}

export { echo, getLength as default, GPAAverageb, Book }


// module.exports = {echo, getLength, GPA: GPAAverageb, book}