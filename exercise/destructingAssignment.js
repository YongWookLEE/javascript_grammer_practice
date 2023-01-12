const student = {
    name: 'Anna',
    level: 1,
  };

const {name, level} = student;
const {name:studentName, level:studentLevel} = student;

const animals = ['dog', 'cat', 'duck', 'cow', 'bird', 'mouse'];

const [a, b, c] =animals;

//////////////////////////////
// spread syntex//
const obj1 ={key: 'key1'}
const obj2 ={key: 'key2'}
const array = [obj1, obj2];

const arrayCopy = [...array]
console.log(array === arrayCopy);  // false
const myObj = {...animals}
console.log(myObj) // 배열 -> 오브젝트 (키값은 index)
const arrayCopy2 = [...array, {key: 'key3'}]
console.log(arrayCopy2);
  
const [aa, bb, cc, ...rest] =animals;
console.log(aa);
console.log(bb);
console.log(cc);
console.log(rest);


let arr = [3, 5, 1]
console.log(Math.max(...arr))

function sumAll(...args){
    let sum = 0;
    console.log(args)
    for(let arg of args) sum += arg;
    return sum;
}

console.log("###################")
console.log(sumAll(1));
console.log(sumAll(1,2));
console.log(sumAll(1,2,3,4));
console.log(sumAll(...arr));
console.log("###################")

function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName );

    console.log(titles);
}

showName(...animals)

// 인수 개수 제한이 없는 함수를 만들떄 전개 연산자 매개변수 사용