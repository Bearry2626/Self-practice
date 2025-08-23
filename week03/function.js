// 1. Function declaration
function sum(a, b){
    return a+b
}
console.log(1,2)

// 2. function expreeion (arrpw syntax)
const sum2 = () => a + b

// 3. function expresstion (anonymousfunction declaration)
const sum3 = function(){
    return a + b
}

// // fucnction ที่รับ function ไปเป็น parametor
function process(num, func) {
  return func(num);
}

function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}


let result = process(addOne(5), square); 
console.log(result); 


// *****ทัศนัยภูวดล 020
function greet(name, call) {
    return call(name);
}
function greetHello(n) {
    return "Hello, " + n;
}
function saybye(b){
    return "bye " + b
}
console.log(greet("Parinda", greetHello("satang"))); //--> err = รอfunction แต่เราส่ง string เข้าไปแทน
console.log(greet("Parinda", greetHello));
console.log(greet("Parinda", saybye));
console.log(saybye("Parinda"));


// *****
function Test(x) {
  return x;
}

function Test2(x) {
  return x + 50;
}
console.log(Test(Test2(10))) // ---> ตอนแรกเพื่อนส่งมาแบบนี้
console.log(Test(Test2)(5)) // ถ้าอยากส่งฟังค์ชั่น Test2 ไปให้Test เอาtest2 ไปทำงานด้วย

function dosomething(...a){
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

console.log(dosomething(1,2,3)); // 6



 
