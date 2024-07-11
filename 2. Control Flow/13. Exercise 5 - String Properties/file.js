//  String Properties

let obj = {
    name: "John",
    age: 30,
    city:"New York"

}
showProperties(obj)
function showProperties(show){
for (const key in show){
    if (typeof show[key] == 'string'){
        console.log(key + " : " + show[key]);
    }
   
}
}