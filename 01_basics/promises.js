//ASYNC AWAIT >> PROMISE CHAINING >> CALL BACK HELL



        //----------CALL BACK HELL---------------
        /* const getPromise = () =>{
            return new Promise((resolve,reject)=>{
                console.log('I am Promise')
                reject('error');
            })
        }

        let promise = getPromise();
        promise.then(()=>{
            console.log('Promise Fulfilled')
        })
        promise.catch(()=>{
            console.log('Promise rejected')
        }) */








        //-------Promise Chaining--------
        /* const fun1 = ()=>{
          return new Promise((resolve, reject)=>{
              setTimeout(()=>{
                  console.log('Data 1 is saved!')
                  resolve('Successful')
              },3000);
          })
          }

        const fun2 = ()=>{
          return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                console.log('Data 2 is saved!')
                resolve('Successful')
            },2000)
          })
        }
       
    let p1=fun1()
    
    p1.then((res)=>{
        console.log(res)
        let p2 = fun2()
        p2.then((res)=>{
            console.log(res)
        })
    }) */

    /* function getData(dataId){
       return  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('data ', dataId)
            resolve('Data Saving Successful')
      }, 2000);
      })
    }
        
     

    getData(1).then((res)=>{
       return getData(2)})
       .then((res)=>{
        return getData(3)})
        .then((res)=>{
            console.log(res)
        })
       */








    //---------ASYCN AWAIT--------
    function getData(data){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log('Data', data)
                resolve('Data saved successfully')
            },2000)
        })
    }
    /* async function myData(){
        await getData(1);
        await getData(2);
        await getData(3);
    }*/
    
    //IIFE-IMMEDIATELY INVOKED FUNCTION! This kind of function runs itself without even calling!! this function doesnt even need name because it needs not to be called and will run immediately!
    (async function (){  
        await getData(1);
        await getData(2);
        await getData(3);
        console.log('Data saved successfully')
    })();
    