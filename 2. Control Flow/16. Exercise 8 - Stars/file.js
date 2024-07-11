showStars(10)

function showStars(limit){
    for (let i = 0; i < limit; i++) {
        let star = '*'.repeat(i + 1);
        console.log(star);
    }
}