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
    const first = yield -1000;
    const second = yield(first + 100);
    return first + second;
}  

let generator2 = gen2();
console.log(generator2.next())
console.log(generator2.next(-50))  // 여기서 -50이 first에 들어가서 이건 왜 first가 저렇게 되고
console.log(generator2.next(200))  // 여기서 200이 second가 저렇게 되는거임?

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
    return val; // customize this return value outside
}

const testGeneratorIt = testGenerator();

console.log(testGeneratorIt.next()); // { value: 1, done: false }
console.log(testGeneratorIt.next()); // { value: 2, done: false }
console.log(testGeneratorIt.next(100)); // { value: 3, done: false } 이게 왜 val에 들어감??
console.log(testGeneratorIt.next()); // { value: undefined -> 100, done: true }

console.log("####################################")

// 전체적으로 next() 인자값이 어디에 어떻게 들어가는지 이해가 안됨;