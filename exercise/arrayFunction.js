// 고차 함수 - 함수를 파라미터로 전달받거나 연산의 결과로 반환해주는 메서드
// .forEach() -for문을 대체하는 고차 함수
// arr.forEach((item, index, thisArr)=>{  })
// item: 배열요소값, index: 배열 인덱스, thisArr: 참조한 배열, 리턴 값: 없음

let numberArr = [1, 2, 3, 4, 5];
let total = 0;

numberArr.forEach((n) => {
  total += n;
});

console.log(total);

console.log("################################################################");
//.map 순회하면서 콜백함수의 실행결과를 리턴한 값으로 이루어진 배열을 반환!!
//arr.map((currentValue, index, array) => { }, thisArg)
// currentValue: 현재 배열요소값, index: 배열 인덱스, array: 참조한 배열, thisArg: 콜백함수에서 this로 사용할 값, 리턴 값: 반환 타입은 찾은 요소의 타입/ 없다면 undefinded

numberArr = [1, 2, 3, 4, 5, 6];
const numberMapArr = numberArr.map((n) => {
  return n % 2 === 0 ? "even" : "odd";
});

console.log(numberMapArr);

let students = [
  { id: 1, name: "Lee" },
  { id: 2, name: "tim" },
  { id: 3, name: "john" },
  { id: 4, name: "brian" },
];

//일반 for문으로 name값 추출
var arr123 = new Array();
for (let obj of students) {
  arr123.push(obj.name);
}
console.log(arr123);
//map으로 name값 추출
var namess = students.map((n) => n.name);
console.log(namess);

let array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let newNumber = array1.map((mm) => {
  return mm.map((m) => {
    return m * 2;
  });
});

console.log(newNumber);

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
  // [["banana", 1], ["orange", 2], ["meat", 4]]
  Object.entries(prices).map(([key, value]) => {
    return [key, value * 2];
  })
);
let doublePricesArray = Object.entries(prices).flatMap(([key, value]) => {
  return [key, value * 2];
});
console.log(doublePrices);
console.log(doublePricesArray);

const userList = [
  {
    userId: "1",
    firstName: "Seungwon",
    lastName: "Go",
    yyyymmdd: "19770513",
    phone: "010-1111-1111",
    address: "Jeju",
  },
  {
    userId: "2",
    firstName: "Jeremy",
    lastName: "Go",
    yyyymmdd: "19800103",
    phone: "010-1111-1112",
    address: "Seoul",
  },
  {
    userId: "3",
    firstName: "James",
    lastName: "Go",
    yyyymmdd: "19821113",
    phone: "010-1111-1113",
    address: "Seoul",
  },
]; // DB에서 가져온 쿼리 정보를 객체 형태로 저장

var mon = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const newUserList = userList.map((u) => ({
  // 그냥 u => { } 하면 함수가 되어버리니 괄호로 감싸서 객체를 리턴한다고 명시
  userId: u.userId, //기존 데이터를 이용한 새로운 필드 추가
  // firstName:u.firstName,
  // lastName:u.lastName,
  fullName: u.firstName + " " + u.lastName,
  //yyyymmdd:u.yyyymmdd,
  year: u.yyyymmdd.substring(0, 4),
  month: u.yyyymmdd.substring(4, 6),
  day: u.yyyymmdd.substring(6, 8),
  usDataFormat:
    mon[parseInt(u.yyyymmdd.substring(4, 6)) - 1] +
    " " +
    parseInt(u.yyyymmdd.substring(6, 8)) +
    ", " +
    parseInt(u.yyyymmdd.substring(0, 4)),
  //나라마다 년월일 오는 순서가 다르다. 이 키는 월년일 로 오게 한다.
  phone: u.phone,
  address: u.address,
}));

console.log(newUserList);

console.log("################################################################");
//indexOf() 찾고자 하는 값을 인덱스로 반환, include() 찾고자 하는 값을 Bool로 반환
//arr.at(index) -> at()은 인덱스에 해당하는 값을 반환
//find()는 찾고자 하는 값을 그대로 반환
//arr.find((element, index, array) => {}, thisArg);
// element 현재 배열 요소값, index: 배열 인덱스, array: 참조 배열, thisArg: this, 리턴 값: 반환요소 타입/ undeifinded

numberArr = [1, 3, 3, 5, 7];
let objectArr = [
  { name: "Harry", age: 20 },
  { name: "Kim", age: 30 },
  { name: "Steve", age: 40 },
];

console.log(
  objectArr.find((obj) => {
    return obj.age === 20;
  })
);

// find는 하나만 찾음. filter는 여러개를 배열로
console.log(numberArr.find((item) => item === 3)); // 3
console.log(numberArr.filter((item) => item === 3)); // [3, 3]

//.findIndex() - indexOf()의 콜백함수 버전, find()의 리턴값이 인덱스인 버전
//arr.findIndex((element, index, array) => {}, thisArg);
// element 현재 배열 요소값, index: 배열 인덱스, array: 참조 배열, thisArg: this, 리턴 값: 배열의 인데스/ 없으면 -1

objectArr = [
  { name: "Harry", age: 20 },
  { name: "Kim", age: 30 },
  { name: "Steve", age: 40 },
];

console.log(
  objectArr.findIndex((obj) => {
    return obj.age === 30;
  })
);

console.log("################################################################");
//.filter() 배열을 순회하면서 콜백 함수의 반환값이 true에 해당하는 요소로만 구성된 새로운 배열을 생성하여 반환
// .find와 .map을 더한 느낌
// arr.filter((element, index, array) =>{}, this)
// element 현재 배열요소 값, index 배열 인덱스, array 참조한 배열, this, 리턴 값: 테스트를 통과한 요소로 이루어진 배열/ 빈 배열

numberArr = [1, 2, 3, 4, 5];
const numberFilterArr = numberArr.filter((i) => i % 2 === 0);
console.log(numberFilterArr);

let testJson = [
  { name: "일건", salary: 1000000 },
  { name: "이건", salary: 2000000 },
  { name: "삼건", salary: 3000000 },
  { name: "사건", salary: 4000000 },
  {},
  { name: "오건", salary: NaN },
  { name: "육건", salary: "undefined" },
  { name: "사건", salary: 7000000 },
];

// 이런식으로 유효성 검증에도 사용 가능
function numberFilter(obj) {
  if (
    "salary" in obj &&
    typeof obj.salary === "number" &&
    !isNaN(obj.salary) &&
    obj.salary > 0
  ) {
    return true;
  } else {
    return false;
  }
}
let newFilterJson = testJson.filter(numberFilter);
console.log(newFilterJson);

let newTestJson = testJson.filter((e) => e.name === "이건");
console.log(newTestJson);

(function test() {
  var testArray = [1, 2, 3, 4, 5, 50, 100];
  var obj = { min: 1, max: 10 };

  function getThreeUpper(value) {
    return value >= this.min && value <= this.max;
  }

  var newArray = testArray.filter(getThreeUpper, obj); // 두번째 인수를 obj로 줘서 this를 조작함

  console.log(newArray);
})();

console.log("################################################################");
//.reduce() 반환값을 전달 받아 연산의 결과값 반환.
// 첫번째 인자부터 시작해 배열값인 두번째 인자를 순회하며 acc +=currVal 을 실행
// arr.reduce((acc, currVal, index, array) => {}, initialVal)
// acc 누산기, 순회하며 계속 더해져서 합쳐지는 값/ currVal 현재 값/ index 인덱스/ array 배열/ initialVal 최초 호출에서 acc 누산기에 제공하는 값, 없으면 배열의 첫번째 요소/ 리턴 값: 누적 계산 결과값

const numberArr12 = [1, 2, 3, 4, 5];
const sum12 = numberArr12.reduce((acc, curVal, index) => {
  console.log(
    `Current Index: ${index} / Previous acc: ${acc} / Current Value: ${curVal}`
  );
  return acc + curVal;
});
console.log(sum12);

// 배열에 들어있는 값을 써야할 경우 initial 값을 반드시 준다.
let initialVal = 0;
let listtt = [{ x: 1 }, { x: 2 }, { x: 3 }];
let summ = listtt.reduce((acc, curVal) => acc + curVal.x, initialVal);
console.log(summ);

// 속성으로 객체 분류하기
var peoples = [
  {
    name: "Alice",
    age: 21,
  },
  {
    name: "Max",
    age: 20,
  },
  {
    name: "Jane",
    age: 20,
  },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (accumulator, currentObj) {
    var key = currentObj[property];
    console.log(`key : ${key}`);
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObj);
    return accumulator;
  }, {}); // 누산기를 산술에 쓰지않고 빈 객체나 배열을 줘서 여기에다 담는 용도로도 쓴다.
}

var groupedPeople = groupBy(peoples, "age");
console.log(`groupedPeople : ${JSON.stringify(groupedPeople)}`);
/*
"age" 속성으로 객체 분류 (나이 별)
groupedPeople : {
	"20":[{"name":"Max","age":20},{"name":"Jane","age":20}],
    "21":[{"name":"Alice","age":21}]
}
*/

//프로미스 순차적으로 실행하기

function runPromiseInSequence(arr, input) {
  return arr.reduce(function (accumulator, currentFunction) {
    console.log(`accumulator : ${accumulator}`);
    console.log(`currentFunction : ${currentFunction}`);
    console.log(`                                    `);
    return accumulator.then(currentFunction);
    // accumulator가 resolve해서 input값을 줘서 then에서 input을 인자라 받아서 함수 실행하는 격
  }, Promise.resolve(input));
}

function promise1(value) {
  return new Promise(function (resolve, reject) {
    console.log(`promise1 -value : ${value}`);
    resolve(value * 5);
  });
}

function promise2(value) {
  return new Promise(function (resolve, reject) {
    console.log(`promise2 -value : ${value}`);
    resolve(value * 2);
  });
}

function function3(value) {
  return value * 3;
}

function promise4(value) {
  return new Promise(function (resolve, reject) {
    console.log(`promise4 -value : ${value}`);
    resolve(value * 4);
  });
}

const promiseArr = [promise1, promise2, function3, promise4];
runPromiseInSequence(promiseArr, 10).then(function (value) {
  console.log(`result value : ${value}`);
});

//오른쪽부터 누산하기
var arr111 = ["경기도", "안양시", "만안구"];

var result222 = arr111.reduceRight((acc, element) => acc + " " + element);

console.log(result222); //  만안구 안양시 경기도
console.log(typeof result222); // string

console.log("################################################################");
//.some() 배열 메소드 include()의 콜백함수 버전. 로직에 따른 bool 리턴
// 주어진 조건을 한개라도 통과하면 true, 모두 통과 못하면 false / 빈 배열은 무조건 false
//arr.some((currVal, index, array) => {}, this);
// currVal: 현재 배열요소값, index: 인덱스, array: 참조 배열, this:this 리턴 값: 하나라도 참이면 true / 그 외에 false

const arrayy = [1, 3, 5];
const resulttt = arrayy.some((val) => {
  return val % 2 === 0;
});

console.log(resulttt);

console.log("################################################################");
//.every() some의 반대 버전, 모든 요소가 통과하면 true/ 하나라도 통과 못하면 false / 빈배열은 무조건 true
//arr.every((currVal, index, array) => {}, this);
// currVal: 현재 배열요소값, index: 인덱스, array: 참조 배열, this:this 리턴 값: 모두 참이면 true / 하나라도 거짓이면 false

const arrayaa = [1, 30, 39, 29, 13];

const resultt1 = arrayaa.every((currentValue) => {
  return currentValue < 40;
});

console.log(resultt1); // 리턴 값 : true
// 그 이유는 array의 모든 요소가 40보다 작기 때문이다.
// 하나라도 부합한 조건에 맞지 안으면 false, 모두 부합하면 true

// -----------------------------------------------

const arrayaa2 = [1, 30, 39, 29, 100, 13];

const resultt2 = arrayaa2.every((currentValue) => {
  return currentValue < 40;
});
console.log(resultt2); // 리턴 값 : false
// 그 이유는 array의 1개의 요소 100이 40보다 크기 때문이다.
// 하나라도 부합한 조건에 맞지 안으면 false, 모두 부합하면 true

console.log("################################################################");
//.sort() 제일 귀찮음
