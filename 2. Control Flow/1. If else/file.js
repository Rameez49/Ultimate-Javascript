//        If Else 

//  If time is between 6am to 12pm Print "Good Morning"
//  If time is between 12pm to 6pm Print "Good Evening"
//  Otherwise Print "Good Night"

let hour = 5;

if (hour >= 6 && hour < 12){
    console.log(`Its ${hour}am "Good Morning"`);
}
else if (hour <=12 && hour < 6){
    console.log(`Its ${hour}pm "Good Evening"`);
}
else {
    console.log("Good Night");
}