function fizzBuzz(value){
     if (value%3==0 && value%5==0){
        return "fizzBuzz"
    }
    else if (value%3==0){
        return "fizz"
    }
    else if (value%5==0){
        return "Buzz"
    }
    else if (typeof value!== 'number'){
        return "Not a Number"
    }
    else {
        return value
    }
}

let result = fizzBuzz()
console.log(result);


