async function userApiCall(url){
    
    const rawData = await fetch(url)
    const jsonData = await rawData.json()
    

    console.log(jsonData);
    
}

userApiCall("https://jsonplaceholder.typicode.com/users")