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
//상속 & 프로토타입 상속 문법 (나중에 알아볼 것)