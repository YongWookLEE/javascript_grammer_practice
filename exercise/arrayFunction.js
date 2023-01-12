// 고차 함수 - 함수를 파라미터로 전달받거나 연산의 결과로 반환해주는 메서드
// .forEach() -for문을 대체하는 고차 함수
// arr.forEach((item, index, thisArr)=>{  }) 
// item: 배열요소값, index: 배열 인덱스, thisArr: 참조한 배열, 리턴 값: 없음

let numberArr = [1,2,3,4,5];
let total = 0;

numberArr.forEach(n => {
    total += n;
})

console.log(total);

console.log("################################################################")
//.map 순회하면서 콜백함수의 실행결과를 리턴한 값으로 이루어진 배열을 반환
//arr.map((currentValue, index, array) => { }, thisArg)
// currentValue: 현재 배열요소값, index: 배열 인덱스, array: 참조한 배열, thisArg: 콜백함수에서 this로 사용할 값, 리턴 값: 반환 타입은 찾은 요소의 타입/ 없다면 undefinded

numberArr = [1,2,3,4,5,6];
const numberMapArr = numberArr.map(n =>{
    return n%2===0 ? 'even': 'odd';
})

console.log(numberMapArr);

let students = [
    {id:1, name:"Lee"},
    {id:2, name:"tim"},
    {id:3, name:"john"},
    {id:4, name:"brian"}
]

//일반 for문으로 name값 추출
var arr123 = new Array();
for (let obj of students){
    arr123.push(obj.name);
}
console.log(arr123);
//map으로 name값 추출
var namess = students.map(n => n.name);
console.log(namess);

let array1 = [[1,2,3],[4,5,6],[7,8,9]];
let newNumber = array1.map(mm =>{
    return mm.map(m =>{
        return m*2;
    })
})

console.log(newNumber)

let prices = {
    banana : 1,
    orange : 2,
    meat : 4
};

let doublePrices = Object.fromEntries(
    // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
    // [["banana", 1], ["orange", 2], ["meat", 4]]
   Object.entries(prices).map(([key,value]) =>{
    return [key, value*2]
   })
);
let doublePricesArray = Object.entries(prices).flatMap(([key,value]) =>{
    return [key, value*2]
   })
console.log(doublePrices)
console.log(doublePricesArray)

const userList = [
    {userId:"1", firstName:"Seungwon", lastName:"Go", yyyymmdd:"19770513", phone:"010-1111-1111", address:"Jeju"},
    {userId:"2", firstName:"Jeremy", lastName:"Go", yyyymmdd:"19800103", phone:"010-1111-1112", address:"Seoul"},
    {userId:"3", firstName:"James", lastName:"Go", yyyymmdd:"19821113", phone:"010-1111-1113", address:"Seoul"},
]; // DB에서 가져온 쿼리 정보를 객체 형태로 저장
 
var mon = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 
const newUserList = userList.map(u => ({ // 그냥 u => { } 하면 함수가 되어버리니 괄호로 감싸서 객체를 리턴한다고 명시
    userId:u.userId, //기존 데이터를 이용한 새로운 필드 추가
    // firstName:u.firstName, 
    // lastName:u.lastName, 
    fullName:u.firstName+' '+u.lastName,
    //yyyymmdd:u.yyyymmdd, 
    year: u.yyyymmdd.substring(0,4),
    month: u.yyyymmdd.substring(4,6),
    day: u.yyyymmdd.substring(6,8),
    usDataFormat: mon[parseInt(u.yyyymmdd.substring(4,6)) - 1] + " " + parseInt(u.yyyymmdd.substring(6,8)) + ", " + parseInt(u.yyyymmdd.substring(0,4)), 
    //나라마다 년월일 오는 순서가 다르다. 이 키는 월년일 로 오게 한다.
    phone:u.phone, 
    address:u.address
})
);
 
console.log(newUserList);



console.log("################################################################")
//indexOf() 찾고자 하는 값을 인덱스로 반환, include() 찾고자 하는 값을 Bool로 반환
//find()는 찾고자 하는 값을 그대로 반환
//arr.find((element, index, array) => {}, thisArg);
// element 현재 배열 요소값, index: 배열 인덱스, array: 참조 배열, thisArg: this, 리턴 값: 반환요소 타입/ undeifinded

numberArr = [1, 3, 3, 5, 7];
let objectArr = [
    { name: 'Harry', age: 20 },
    { name: 'Kim', age: 30 },
    { name: 'Steve', age: 40 }
];

console.log(
    objectArr.find(obj =>{
        return obj.age ===20
    })
);

// find는 하나만 찾음. filter는 여러개를 배열로
console.log(numberArr.find(item => item === 3));  // 3
console.log(numberArr.filter(item => item === 3));  // [3, 3]

//.findIndex() - indexOf()의 콜백함수 버전, find()의 리턴값이 인덱스인 버전
//arr.findIndex((element, index, array) => {}, thisArg);
// element 현재 배열 요소값, index: 배열 인덱스, array: 참조 배열, thisArg: this, 리턴 값: 배열의 인데스/ 없으면 -1

objectArr = [
    { name: 'Harry', age: 20 },
    { name: 'Kim', age: 30 },
    { name: 'Steve', age: 40 }
];

console.log(
    objectArr.findIndex(obj =>{
        return obj.age ===30
    })
);

console.log("################################################################")
//.filter()

console.log("################################################################")
//.reduce()

console.log("################################################################")
//.some()

console.log("################################################################")
//.every()

console.log("################################################################")
//.sort() 제일 귀찮음