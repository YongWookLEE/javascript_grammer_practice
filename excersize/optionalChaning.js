const person1 = {
    name: 'Ellie',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };

  const person2 = {
    name: 'Bob',
  };

// function printManager(person){
//     console.log(person.job.manager.name);
// }

// printManager(person1)
// printManager(person2)  //에러

function printManager(person){
    console.log(person.job?.manager?.name);
}

printManager(person1)
printManager(person2)  // undefined

let user1 = {
    firstName : 'Violet',
    admin(){
        console.log("관리자 계정입니다.")
    }
}

let user2 = {};
let user3 = null;

user1.admin?.();
user2.admin?.();

let key = "firstName";

console.log(user1?.[key])
console.log(user3?.[key])
console.log(user1?.[key]?.something?.existing)