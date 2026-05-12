Promise.all([
    Promise.resolve("Task1 is completed"),
    Promise.resolve("Task2 is completed"),
    Promise.reject("Task 3 is rejected")
]).then((res)=>console.log(res))
.catch((err)=>console.log(err))

//.all wait for all promises to resolve and return their result as an array. If any promise rejected it immediately rejects