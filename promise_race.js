Promise.race([
    new Promise((resolve)=>setTimeout(()=>resolve("task1 is finished"),1000)),
    new Promise((resolve)=>setTimeout(()=>resolve("task2 is finished"),500))
]).then((res)=>console.log(res))
.catch((err)=>console.log(err))

//it resolves or reject  as soon as first promise settle