const array = [1, [2,3],[4,5,[6,7]]];
array.flat(1); // [1,2,3,4,5]
console.log(array.flat(2))


// arr.map(function(element, index, array){  }, this);
let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    console.log(this);
    return element;
}, 80);

// flatMap()
let arr1 = ["it's Sunny in", "", "California"];
arr1.map(x=>x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]
 
arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]

const arrays = ['a','b','c','d'];
console.log(arrays.at(-1)); // 'd