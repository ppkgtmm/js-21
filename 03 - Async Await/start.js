(() => {

  // 1. How Asynchronous code works in JavaScript
    /*function simulateAsync(text,timeout) {
        setTimeout(()=>{
            console.log(text)
        },timeout)
    }
    simulateAsync('A',500)
    simulateAsync('B',1000)
    simulateAsync('C',50)*/

  // 2. Callback  help problems from Asynchronous
   /* function simulateAsync(text,timeout,callback) {
        setTimeout(()=>{
            console.log(text)
            if(callback){ // there is call back
                callback()
            }

        },timeout)
    }
    simulateAsync('A',1000,()=>{
        simulateAsync('B',500,()=>{
            simulateAsync('C',100,)
        })
    })*/

  // 3. Promise Reduce LOC of callback
    /*function simulateAsync(text,timeout) {
        return new Promise((resolve, reject)=>{ //resolve = func to call after, reject for throw error
            setTimeout(()=>{
                if(text === 'B')
                    return reject('B is rejected')
                console.log(text)
                resolve()
                },timeout)
        })
    }
    simulateAsync('A',1000).then(()=>{
        return simulateAsync('B',500)
    }).then(()=>{
        return simulateAsync('C',20)
        }
    ).catch((error)=>{
        console.error(error)
    })*/

  // 4. Async/Await
    function simulateAsync(text,timeout) {
        return new Promise((resolve, reject)=>{ //resolve = func to call after, reject for throw error
            setTimeout(()=>{
                /*if(text === 'B')
                    return reject('B is rejected')*/
                console.log(text)
                resolve()
            },timeout)
        })
    }
    async function run() {
        try{
            await simulateAsync('A',1000)
            await simulateAsync('B',200)
            await simulateAsync('C',50)
        }
        catch (e) {
            console.error(e)
        }
    }
    run()
})();
