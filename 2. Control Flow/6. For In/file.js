//  For In

//  for in tab use hota hai jab humne objects main se values nikalni hoti hain.

const person ={
    name: 'Rameez',
    age: 21
};

for (const key in person) {
    console.log(key, person[key]);
}
const Colors = ['red','blue','black']

for(const index in Colors){
    console.log(index, Colors[index]);
}