// const valueLists2 = {
//         seg17: {
//           radioValue: '01',
//           radioText: '사용',
//         },
//         seg18: {
//           radioValue: '01',
//           radioText: '사용',
//         },
//         seg19: {
//           radioValue: '02',
//           radioText: '미사용',
//         }
//     }

///////////////////////////////////////////
//템플릿 리터럴 ``
const tag1 = (...args) => console.log(args);
tag1`너의 정체가 도대체 뭐니?`;

const aa = '정체가';
const bb = '뭐니?';
 
tag1`너의 ${aa} 도대체 ${bb}`; 

console.log("/////////////////////////////////////")
//////////////////////////////////////////

let a = 20;
let b = 8;
let tag = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
} 
let output = tag`that ${a} is ${b}`
console.log("/////////////////////////////////////")
// 첫 인수는 배열, 나머지 인수 ${a}값, ${b}값

const ramenList = [
  {
      brand: '농심',
      items: ['신라면','짜파게티','참치마요','둥지냉면']
  },
  {
      brand: '삼양',
      items: ['삼양라면', '불닭볶음면']
  },
  {
      brand: '오뚜기',
      itmes: []
  }
];

function fn(strings, brand, items) {
  if(undefined === items) {
      return brand + "의 라면은 재고가 없습니다!";
  } else {
      return strings[0] + brand + strings[1] + items;
  }
}

console.log(fn`구매가능한 ${ramenList[0].brand}의 라면 : ${ramenList[0].items}`);
//구매가능한 농심의 라면 : 신라면,짜파게티,참치마요,둥지냉면
console.log(fn`구매가능한 ${ramenList[1].brand}의 라면 : ${ramenList[1].items}`);
//구매가능한 삼양의 라면 : 삼양라면,불닭볶음면
console.log(fn`구매가능한 ${ramenList[2].brand}의 라면 : ${ramenList[2].items}`);
// 오뚜기의 라면은 재고가 없습니다.

console.log("/////////////////////////////////////")

let isLarge = function(){
  return false;
}
let isColl = function(){
  return false;
}

//중첩 안했을때
let classes1 = `header ${ isLarge() ? '': (isColl() ? 'icon-expander': 'icon-collaspser')}`
//중첩 템플릿
let classes2 = `header ${ isLarge() ? '': `icon-${isColl() ? 'expander': 'collaspser'}`}`

console.log(classes1);
console.log(classes2);

console.log("/////////////////////////////////////")