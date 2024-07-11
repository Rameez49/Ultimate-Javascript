//  Print Even and odd Numbers

function showNumber(number){
   for(let i=0; i<=number; i++){
    
       (i%2==0)?console.log(i,"Even") : console.log(i,"Odd");;
   }
}
showNumber(200);
