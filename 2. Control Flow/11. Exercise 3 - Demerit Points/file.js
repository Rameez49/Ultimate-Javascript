// License Points

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit+ kmPerPoint){
        console.log("OK");
    }
    else{

    const points = Math.floor((speed-speedLimit) / kmPerPoint)
    if(points>12){
        console.log("license Suspended");
    }
    else{
        console.log("Points: "+points);
    }
    }
}
checkSpeed(135);