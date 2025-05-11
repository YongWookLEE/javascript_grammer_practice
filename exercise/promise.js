const appKey = "85c20df89d2f4c65f9c8a964ba293a9c";
const errAppKey = "85c20df89d2f4c65f9c8a964ba293a9";

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.4657191278954&lon=127.042490969978&appid=${appKey}`)
// .then(res => res.json())
// .then(data => {
//     console.log('success')
//     console.log(data)
// })
// .catch(err => {
//     console.log("fail")
//     console.log(err)
// })

async function getData() {
  let response = null;
  let data;
  try {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=37.4657191278954&lon=127.042490969978&appid=${appKey}`
    );
  } catch (e) {
    console.log(e);
  }

  if (!response) return;

  try {
    data = await response.json();
  } catch (e) {
    console.log(e);
  }

  const { coord, timezone, name, ...rest } = data;
  console.log(coord);
  console.log(timezone);
  console.log(name);
  console.log(rest);
}

async function getDataWithoutCatch() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=37.4657191278954&lon=127.042490969978&appid=${appKey}`
  ).catch((e) => {
    console.log(e);
  });

  if (!response) return;

  let data = await response.json().catch((e) => {
    console.log(e);
  });

  const { coord, timezone, name, ...rest } = data;
  console.log(coord);
  console.log(timezone);
  console.log(name);
  console.log(rest);
}

///////////////////////////////////////////////////////////////////

const promise1 = new Promise((res, err) => {
  setTimeout(() => {
    res("성공1");
  }, 1000);
});

const promise2 = new Promise((res, err) => {
  setTimeout(() => {
    res("성공2");
  }, 2000);
});

const promise3 = new Promise((res, err) => {
  setTimeout(() => {
    res("성공3");
  }, 3000);
});

const promise4 = new Promise((res, err) => {
  setTimeout(() => {
    err("실패1");
  }, 500);
});

const promise5 = new Promise((res, err) => {
  setTimeout(() => {
    err("실패2");
  }, 2000);
});

const promise6 = new Promise((res, err) => {
  setTimeout(() => {
    err("실패3");
  }, 3000);
});

// promise1.then( n => {
//     console.log('1then')
//     console.log(n)
// }).catch(n => {
//     console.log('1catch')
//     console.log(n)
// })

// promise2.then( n => {
//     console.log('2then')
//     console.log(n)
// }).catch(n => {
//     console.log('2catch')
//     console.log(n)
// })

// promise3.then( n => {
//     console.log('3then')
//     console.log(n)
// }).catch(n => {
//     console.log('3catch')
//     console.log(n)
// })

//////// 체이닝 사용 가능 (catch 대신 then 뒤에 ,로 함수 이어 붙이면 그게 catch)
// promise4.then( n => {
//     console.log('4then')
//     console.log(n)
// }, n=>{
//     console.log('4catch')
//     console.log(n)
// }, n=>{
// })

// promise5.then( n => {
//     console.log('5then')
//     console.log(n)
// }).catch(n => {
//     console.log('5catch')
//     console.log(n)
// })

// promise6.then( n => {
//     console.log('6then')
//     console.log(n)
// }).catch(n => {
//     console.log('6catch')
//     console.log(n)
// })

//Promise.all  전부 다 성공
Promise.all([promise1, promise2, promise3])
  .then((value) => console.log(value + "all1"))
  .catch((err) => console.log(err + "all1"));
Promise.all([promise1, promise2, promise4])
  .then((value) => console.log(value + "all2"))
  .catch((err) => console.log(err + "all2"));
//Promise.race 가장 빨리 성공 또는 가장 빨리 실패
Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value + "race1"))
  .catch((err) => console.log(err + "race1"));
Promise.race([promise1, promise2, promise4])
  .then((value) => console.log(value + "race2"))
  .catch((err) => console.log(err + "race2"));
Promise.race([promise5, promise6, promise4])
  .then((value) => console.log(value + "race3"))
  .catch((err) => console.log(err + "race3"));
//Promise.any 아무거나 성공
Promise.any([promise1, promise2, promise3])
  .then((value) => console.log(value + "any1"))
  .catch((err) => console.log(err + "any1"));
Promise.any([promise5, promise2, promise6])
  .then((value) => console.log(value + "any2"))
  .catch((err) => console.log(err + "any2"));
//Promise.allSettled 각각의 status
Promise.allSettled([promise5, promise2, promise6])
  .then((value) => console.log(value))
  .catch((err) => console.log(err + "allSettled"));
Promise.allSettled([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((err) => console.log(err + "allSettled"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 비동기 처리란 현재 실행중인 작업과는 별도로 다른 작업을 수행하는 것을 말함.
 * 콜백 함수란 인자로 사용되는 함수, 비동기 작업을 순차적으로 수행할 떄 콜백 함수가 중첩되어 콜백 지옥이 된다
 * 이러한 콜백 지옥을 대체하기 위해 Promise를 사용한다
 * Promise는 new Promise(executor)로 선언하여 사용할 수 있다.
 * executor는 함수로서 인자로 resolve, reject를 가진다 const exe = (resolve, reject)=>{resolve(성공), reject(실패)}
 * resolve는 함수가 성공하였을 때를 알려주는 객체, reject는 함수가 실패하였을 때를 알려주는 오류 객체
 */

// const myPromise = new Promise((resolve, reject) => {
// 	// 비동기 작업 수행
//     const data = fetch('서버로부터 요청할 URL');

//     if(data)
//     	resolve(data); // 만일 요청이 성공하여 데이터가 있다면
//     else
//     	reject("Error"); // 만일 요청이 실패하여 데이터가 없다면
// })

// 이렇게 만들어진 프로미스 객체는 비동기 작업이 완료된 후 작업 결과에 따라 .then() 과 .catch() 메소드 체이닝을 통해
// 성공과 실패에 대한 후속 처리를 진행 할 수 있다. 위의 resolve()의 매개 변수가 .then()의 인자로 들어가 계속 사용 가능하다
// .cathch는 reject()

const workA = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 3000);
  });

  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 3000);
  });

  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 3000);
  });

  return promise;
};

//promise 체이닝
workA(10)
  .then((res) => {
    console.log(res);
    return workB(res);
  })
  .then((res) => {
    console.log(res);
    return workC(res);
  })
  .then((res) => console.log(res));

// workA(10).then((res) => {
//   console.log(res);
//   workB(res).then((res) => {
//     console.log(res);
//     workC(res).then((res) => console.log(res));
//   });
// });

const executor = (res, rej) => {
  setTimeout(() => {
    res("성공");
    rej("실패");
  }, 3000);
};

const promise333 = new Promise(executor);

// promise.then(성공시 함수, 실패시 함수)
promise333.then(
  (result) => console.log(result),
  (err) => console.log(err)
);

// promise.then(성공시 함수).catch(실패시 함수)
promise333
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// 위와 같이 프로미스 객체를 변수에 바로 할당하는 방식을 사용 할 수도 있지만, 일반적인 상황은 다음과 같이 별도의 함수로 감싸서 사용하는 방식이다.

//   // 프로미스 객체를 반환하는 함수 생성
// function myPromise() {
//   return new Promise((resolve, reject) => {
//     if (/* 성공 조건 */) {
//       resolve(/* 결과 값 */);
//     } else {
//       reject(/* 에러 값 */);
//     }
//   });
// }

// // 프로미스 객체를 반환하는 함수 사용
// myPromise()
//     .then((result) => {
//       // 성공 시 실행할 콜백 함수
//     })
//     .catch((error) => {
//       // 실패 시 실행할 콜백 함수
//     });

// 함수로 만들어 사용하는데 있어서 이유는 다음과 같다

// 재사용성 : 프로미스 객체를 함수로 만들면 필요할 때마다 호출하여 사용함으로써, 반복되는 비동기 작업을 효율적으로 처리 할 수 있다.
// 가독성 : 프로미스 객체를 함수로 만들면 코드의 구조가 명확해져, 비동기 작업의 정의와 사용을 분리하여 코드의 가독성을 높힐 수 있다.
// 확장성 : 프로미스 객체를 함수로 만들면 인자를 전달하여 동적으로 비동기 작업을 수행할 수 있다. 또한 여러 개의 프로미스 객체를 반환하는 함수들을 연결하여 복잡한 비동기 로직을 구현 할 수 있다.
// commAjax를 만들어 사용했던 것 처럼 성공 조건도 매개변수로 전달(?)

//그래서 대부분 자바스크립트 비동기 라이브러리도 함수 형태로 프로미스 객체를 제공한다. 대표적으로 자바스크립트의 fetch() 메소드가 있는데,
//메소드 내에서 프로미스 객체를 생성하여 서버로부터 데이터를 가져오면 resolve() 하여 .then() 으로 처리하기 때문이다.

// get 요청 예시
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json()) // 응답 객체에서 JSON 데이터를 추출한다.
//   .then((data) => console.log(data)); // JSON 데이터를 콘솔에 출력한다.

//async는 promise객체를 반환한다
//await는 async 함수 안에서만 사용가능하며 비동기 함수가 완전히 끝나고 다음 코드를 실행시킨다

// const delay = (ms) => {
//     return new Promise((resolve) => {setTimeout(() => {
//         resolve(`${ms}미리세컨드가 지났습니다.`)
//     }, ms)})
// }

// const start = async () => {
//     try {
//         let result = await delay(3000);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

//비동기 작업을 순서대로 처리하려고 await를 걸다보면 너무 많은 시간이 걸리게 되는데 그떄 사용 되는것이 Promise.all([a,b,c])
//비동기 작업을 한꺼번에 실행한 뒤 모두 fullfiled가 된다면 결과를 반환, 하나라도 실패한다면 err 발생
// Promise.all, any, race 등 여러가지가 있다 위에 설명되어있음

// const start = async () => {
//     try {
//         let result = await Promise.all([workA(), workB(), workC()]);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
