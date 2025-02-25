//Task 1:
async function iterateWithAsyncAwait(values) {
    for (let i = 0; i < values.length; i++) {
      await new Promise(resolve => setTimeout(() => {
        console.log(values[i])
        resolve();
      }, 1000))
    }
  }
  
  const values = [1, 2, 3, 4, 5]
  iterateWithAsyncAwait(values)

//Task 2:
async function awaitCall() {
    try {
     
      const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Data fetched successfully!")
        }, 2000)
      })
      
      const data = await fetchData
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
  awaitCall()
  // Task 3: 
  async function awaitCall() {
    try {
    
      const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("API call failed!")
        }, 2000)
      });
      
      const data = await fetchData
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
  
  awaitCall()
  //Task 4:
  async function task1() {
    return new Promise(resolve => setTimeout(() => {
      console.log("Task 1 completed.")
      resolve()
    }, 1000))
  }
  
  async function task2() {
    return new Promise(resolve => setTimeout(() => {
      console.log("Task 2 completed.")
      resolve()
    }, 1000))
  }
  
  async function task3() {
    return new Promise(resolve => setTimeout(() => {
      console.log("Task 3 completed.")
      resolve()
    }, 1000))
  }
  
  async function chainedAsyncFunctions() {
    await task1()
    await task2()
    await task3()
  }
  
  chainedAsyncFunctions()
//Task 5:
async function concurrentRequests() {

    const apiCall1 = new Promise(resolve => setTimeout(() => {
      resolve("API Call 1 data")
    }, 2000))
  
    const apiCall2 = new Promise(resolve => setTimeout(() => {
      resolve("API Call 2 data")
    }, 1000))
  
    try {
      const results = await Promise.all([apiCall1, apiCall2])
      console.log("Results of both API calls:", results)
    } catch (error) {
      console.error("Error in one of the API calls:", error)
    }
  }
  
  concurrentRequests()
  //Task 6:
  async function parallelCalls(urls) {
    const fetchData = url => {
      return new Promise(resolve => setTimeout(() => {
        resolve(`Fetched data from ${url}`)
      }, Math.random() * 3000))
    }
  
    try {
      const results = await Promise.all(urls.map(url => fetchData(url)))
      console.log("Responses from all requests:", results)
    } catch (error) {
      console.error("Error fetching data from one of the URLs:", error)
    }
  }
  
  const urls = ["https://api1.com", "https://api2.com", "https://api3.com"]
  parallelCalls(urls);
  
  

  
  
  























  