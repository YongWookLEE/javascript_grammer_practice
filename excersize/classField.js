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
