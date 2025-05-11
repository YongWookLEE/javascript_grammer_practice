/**
 * 배열 메소드 concat(a,b) 배열을 이어 붙인다
 * slice(begin,end) 배열 요소를 잘라서 새로운 배열로 반환
 * sort() 내림차순 오름차순
 * isArray() 배열인지 아닌지 판별하는 함수
 */

// 내림차순
// a: 배열의 다음요소 (ex:blue) b: 배열의 이전 요소 (ex:green)
// 0 보다 작은 값(-1) : a 가 b 보다 앞에 있어야 함
// 0 보다 큰 값(1) : b가 a 보다 앞에 있어야 함
// 0 : 순서 변경 X
const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};

let colors = ["green", "blue", "purple"];
colors.sort(compare);
console.log(colors);

/**
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 모질라 재단 자바스크립트 참고할것
 */
