const marksArray = [76,92,90];

let result = calculateGrade(marksArray);
console.log(result);

function calculateGrade(numbers){
    let sum=0;
    for (const key of numbers) {
        console.log(key);
        sum+=key;
    }
    let average = sum/numbers.length;
    console.log(`Your average is = ${average}`);

    if (average<60) return "F Grade"
    else if (average>=60 && average<70) return "D Grade"
    else if (average>=70 && average<80) return "C Grade"
    else if (average>=80 && average<90) return "B Grade"
    else if (average>=90 && average<=100) return "A Grade"
    else return "Inavlid Marks"
}