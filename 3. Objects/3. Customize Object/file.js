const circle = {
    radius : 2,
}

circle.color = "yellow"
circle.draw =  ()=>{
    console.log("Drawing a circle")
}

delete circle.color
delete circle.draw

console.log(circle);
// console.log(circle.draw);