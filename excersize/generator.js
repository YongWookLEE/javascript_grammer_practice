//Generator? 메소드 이름 앞에 * 붙여주면 된다.
class Gen{
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
    }
}

// for(let n of new Gen()) {
//     console.log(n)
// }

// generator는 함수이다. function 바로 뒤에 *를 붙이는것이 일관성 유지목적으로 권장된다.
function* gen1(){
    yield 'hello';
    yield 'world';
    yield 'message';
    return 'out';
}

let generator1 = gen1()
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())
console.log(generator1.next())

console.log("####################################")

let gen2 = function* () {
    const first = yield -1000; // 여기서 -1000지점이다! 알려주고 first =? 상태
    const second = yield(first + 100); // 이게 second로 들어가는게 아니라 value값만 던져주고 second =? 이 상태
    return first + second;
}  

let generator2 = gen2();
console.log(generator2.next())
console.log(generator2.next(-50))  // 여기서 -50이 first에 들어감
console.log(generator2.next(200))  // 여기서 200이 second에 들어가게 되고

console.log("####################################")

function* newGenerator() {
    yield 'something'; // yield keyword는 우리가 바깥에서 value를 넣는 것을 허용함
    const final = yield 'give me value';
    return final; // 이거 final이 왜 custom이 되는거임??
}

const newGeneratorIt = newGenerator();

console.log(newGeneratorIt.next()); // { value: 'something', done: false }
console.log(newGeneratorIt.next()); // { value: 'give me value', done: false }
console.log(newGeneratorIt.next('custom')); // { value: undefined -> 'custom value', done: true }

console.log("####################################")

function* testGenerator() {
    yield 1;
    
    const val = yield 2;
    const final = yield 3;
    return final; 
}

const testGeneratorIt = testGenerator();

console.log(testGeneratorIt.next()); // { value: 1, done: false }
console.log(testGeneratorIt.next()); // { value: 2, done: false } 여기서 2를 던지면서 val=? 상태인거임 
console.log(testGeneratorIt.next(100)); // { value: 3, done: false } 여기서 인자값을 ?에 주면서 val에 100이 들어가고 다시 final =? 이 상태
console.log(testGeneratorIt.next()); // { value: undefined -> 100, done: true } 여기서 값을 준다면 final에 들어가게됨

console.log("####################################")

// Generator 안에서 yield는 위치 표시같은 개념 value로 현재 위치를 알려주고 done으로 더 있냐 없냐를 알려줌
// 바깥에서 next() 안에 값을 넣으면 그전에 던졌던 위치의 질문에 답을 주는 느낌이다.