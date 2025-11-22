function findMinInArray(arr){
    let min = arr[0]

    for(let i = 0; i <arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }

    return min
}

function prettyFormat(result){
    console.log("this is the", result);
    
}

let chacha = [-22, 46, -100, 37, 1000]
let result = findMinInArray(chacha)
prettyFormat(result)

// console.log(result);
