let contacts = ["Naveed", "saif", "ali", "raza", "naseem", "naida"]

let searchResult = contacts.filter(function(element){
    return element.toLowerCase().includes("na")
})

console.log(searchResult);
