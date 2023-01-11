const name = 'Ellie';
const age = '18';

const grp1 = {
    name: name,
    age: age
}

console.log(grp1);
console.log("#######################")

const grp2 ={
    name,
    age
}

console.log(grp2);
console.log("#######################")

let room = {
    number : 23,
    name : 'hotel',
    toJSON(){
        return 9999;
    }
}

let meetup = {
    title : "conf",
    room
}

console.log(meetup);