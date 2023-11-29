

function shuffle(array){
    for (let i=array.length-1;i>0;i--){
        const random= Math.floor(Math.random()*(i+1));

        [array[i],array[random]] =[array[random],array[i]];
    }
}

const things=['a',1,2,5,7,8,9,'k','h'];
shuffle(things);
console.log(things);