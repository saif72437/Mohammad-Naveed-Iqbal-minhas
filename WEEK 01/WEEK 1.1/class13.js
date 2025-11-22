function fetchDataFromDatabase(){
    let user ={
        username: "saif12",
        password: "123456"
    }

    console.log(user);
    
}


setInterval(fetchDataFromDatabase, 500)