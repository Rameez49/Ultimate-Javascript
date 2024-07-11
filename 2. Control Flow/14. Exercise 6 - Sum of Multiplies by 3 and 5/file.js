let result = sumValues(10)
console.log(`Sum of all values = ${result}`);

function sumValues(value){
    let sum=0;
    for(let i=0; i<=value; i++){
        if(i%3 === 0 || i%5===0){
            console.log(i);
            sum+= i;
        }
    }
    return sum;
}