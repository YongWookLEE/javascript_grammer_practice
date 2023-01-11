const appKey = '85c20df89d2f4c65f9c8a964ba293a9c';
const errAppKey = '85c20df89d2f4c65f9c8a964ba293a9';

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



async function getData(){
    let response = null;
    let data;
    try{
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.4657191278954&lon=127.042490969978&appid=${appKey}`)
    }catch(e){
        console.log(e)
    }

    if(!response) return;

    try{
        data = await response.json();
    }catch(e){
        console.log(e);
    }

    const {coord, timezone, name, ...rest} = data
    console.log(coord)
    console.log(timezone)
    console.log(name)
    console.log(rest)
}

async function getDataWithoutCatch(){


    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.4657191278954&lon=127.042490969978&appid=${appKey}`)
                            .catch((e)=>{
                                console.log(e);
                            })
  
    
    if(!response) return;

    let data = await response.json()
                                .catch((e) => {
                                    console.log(e);
                                })
                            

    const {coord, timezone, name, ...rest} = data
    console.log(coord)
    console.log(timezone)
    console.log(name)
    console.log(rest)
}

///////////////////////////////////////////////////////////////////

const promise1 = new Promise((res, err) =>{
    setTimeout(()=>{
        res("성공1")
    }, 1000)
})

const promise2 = new Promise((res, err) =>{
    setTimeout(()=>{
        res("성공2")
    }, 2000)
})

const promise3 = new Promise((res, err) =>{
    setTimeout(()=>{
        res("성공3")
    }, 3000)
})

const promise4 = new Promise((res, err) =>{
    setTimeout(()=>{
        err("실패1")
    }, 500)
})

const promise5 = new Promise((res, err) =>{
    setTimeout(()=>{
        err("실패2")
    }, 2000)
})

const promise6 = new Promise((res, err) =>{
    setTimeout(()=>{
        err("실패3")
    }, 3000)
})

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
Promise.all([promise1, promise2, promise3]).then(value =>console.log(value +'all1')).catch(err => console.log(err +'all1'));
Promise.all([promise1, promise2, promise4]).then(value =>console.log(value +'all2')).catch(err => console.log(err +'all2'));
//Promise.race 가장 빨리 성공 또는 가장 빨리 실패
Promise.race([promise1, promise2, promise3]).then(value =>console.log(value +'race1')).catch(err => console.log(err +'race1'));
Promise.race([promise1, promise2, promise4]).then(value =>console.log(value +'race2')).catch(err => console.log(err +'race2'));
Promise.race([promise5, promise6, promise4]).then(value =>console.log(value +'race3')).catch(err => console.log(err +'race3'));
//Promise.any 아무거나 성공
Promise.any([promise1, promise2, promise3]).then(value =>console.log(value +'any1')).catch(err => console.log(err +'any1'));
Promise.any([promise5, promise2, promise6]).then(value =>console.log(value +'any2')).catch(err => console.log(err +'any2'));
//Promise.allSettled 각각의 status
Promise.allSettled([promise5, promise2, promise6]).then(value =>console.log(value)).catch(err => console.log(err +'allSettled'));
