Promise.resolve(5)
.then((res)=>res*2)
.then((final)=>final+5)
.then((ans)=>console.log(ans))