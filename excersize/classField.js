class Hello{
    fields = 0;
    name1 = 'world';
    static title = 'here';
    static get titlea() {return this.title;}
    get fieldss() {
        return this.fields}
}

// 생성자 통해서 static title에 강제로 값을 넣으면 static field가 아닌 일반 field가 하나 더 생성되어지는것
let newHello = new Hello();
newHello.title = 'there'
newHello.name1 = 'hi'
console.log(newHello.title)
console.log(newHello.name)
console.log(newHello.fields)
console.log(newHello)


// 생성자를 통해서 접근할때는 static field에 접근 불가. get, set 메서드도 마찬가지
let newHello2 = new Hello();
console.log(newHello2.titlea)
console.log(newHello2.name1)
console.log(newHello2.fieldss)
console.log(newHello2)

//클래스명만 가지고는 static에게만 접근 가능. get, set 메서드도 static이 붙으면 static field만 접근 가능
Hello.title = "this"
console.log(Hello.titlea)  //getter를 통한 접근
console.log(Hello.title)   // field 바로 접근
console.log(Hello.name1)
console.log(Hello.fieldss)
console.log(Hello)


console.log("#################################")

class ClassWithPrivateField{
    #privateField;

    constructor() {
        this.#privateField =42;
    }
}

class SubClass extends ClassWithPrivateField{
    #subPrivateField;

    constructor(){
        super();
        this.#subPrivateField =65;
    }

}

console.log("#################################")

const methodName = 'introduce';

class Person{
    height = 180;

    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    //[]를 통해 메소드 명을 변수로 넣을수 있다.
    [methodName](num){
        return `안녕하세요 제 이름은${this._name} 입니다. 좋아하는 숫자는 ${num}입니다.`
    }

    get name(){
        console.log("getter 들어옴")
        return this._name;
    }
    
    set name(name){
        console.log("setter 들어옴")
        this._name=name;
    }

}

let newPerson = new Person('Lee','29');
console.log(newPerson.height);
console.log(newPerson.name);
console.log(newPerson.introduce(5));

newPerson.name = "kim"
console.log(newPerson.name);

console.log("##################################")

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

let gen2 = function* () {
    const first = yield -1000;
    const second = yield(first + 100);
    return first + second;
}  

let generator2 = gen2();
console.log(generator2.next())
console.log(generator2.next(-50))  // 여기서 -50이 first에 들어가서
console.log(generator2.next(200))  // 여기서 200이 second에 들어간건가?

	
function* newGenerator() {
    yield 'something'; // yeild keyword는 우리가 바깥에서 value를 넣는 것을 허용함
    const final = yield 'give me value';
    return final; // customize this return value outside
  }

const newGeneratorIt = newGenerator();
 
console.log(newGeneratorIt.next()); // { value: 'something', done: false }
console.log(newGeneratorIt.next()); // { value: 'give me value', done: false }
console.log(newGeneratorIt.next('custom')); // { value: undefined -> 'custom value', done: true }

	
function* testGenerator() {
    yield 1;
   
    const val = yield 2;
    console.log(val)
    const final = yield 3;
    console.log(val)
    console.log(final)
    return val; // customize this return value outside
  }
   
  const testGeneratorIt = testGenerator();
   
  console.log(testGeneratorIt.next()); // { value: 1, done: false }
  console.log(testGeneratorIt.next()); // { value: 2, done: false }
  console.log(testGeneratorIt.next(100)); // { value: 3, done: false }
  console.log(testGeneratorIt.next()); // { value: undefined -> 100, done: true }
  

//상속 & 프로토타입 상속 문법 (나중에 알아볼 것)