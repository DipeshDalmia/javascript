Promise.any([
    Promise.reject("task1 is rejected"),
    Promise.resolve("task2 is completed"),
    Promise.resolve("task3 is completed")
]).then((res)=>console.log(res))
.catch((err)=>console.log(err))