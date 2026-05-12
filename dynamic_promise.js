function asynctask(taskname){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${taskname} completed`)
        },1000)
    })
}
asynctask("download file").then((res)=>
    console.log(res))