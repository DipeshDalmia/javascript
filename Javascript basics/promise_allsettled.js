Promise.allSettled([
    Promise.resolve("Task1 is completed"),
    Promise.reject("Task 3 is rejected"),
    Promise.resolve("Task2 is completed")
]).then((res)=>console.log(res))


// waits for all promises to settle and return result