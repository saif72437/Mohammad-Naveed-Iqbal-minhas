let arr = [100, 13, 12, 1000, 77]
let max = arr[0]

for(let i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
}

console.log(max);
