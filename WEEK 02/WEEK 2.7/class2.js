let arr = [100, 700, 500, 400, 99]
let min = arr[0]

arr.map(function(element){
    if(min > element){
        min = element
    }
})

console.log(min);
