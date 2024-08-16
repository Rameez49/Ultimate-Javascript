// factory Functions

function createCircle (radius){
    return{
        radius,
        draw(){
            console.log("Draw Value");
        }
    }
}
const circle1 = createCircle(1).draw
console.log(circle1);