// higher order funtion
// filter => it will always return a new array

let arr = [1,2,3,4,5,6,7,8,9,10]

let newArr = arr.filter(function(element, index){
    return element % 2 == 0;
})

console.log(newArr);
