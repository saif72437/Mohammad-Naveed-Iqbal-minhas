function sum(num1, num2, num3){
    return num1 + num2 + num3;
}

function average(fun){
    let result = fun(10, 20, 30);

    console.log(result / 3);
    
}

average(sum)