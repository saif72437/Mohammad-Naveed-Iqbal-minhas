async function apiCall(){
    // fetch always return a promise
    const rawData = await fetch("https://api.github.com/users/saif72437")
    const jsonData = await rawData.json()
    
    console.log(jsonData);
    
}

apiCall()