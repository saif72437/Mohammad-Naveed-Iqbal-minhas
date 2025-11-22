async function takeDataFromInternet() {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
    const jsonData = await rawData.json()

   console.log(jsonData);
   
    
    
}

takeDataFromInternet()