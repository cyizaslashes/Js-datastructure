 function ArrayAverage(arr){

    if (arr.length===0){
        return 0;
    }else{
        const sum=arr.reduce((acc,currentValue)=>acc+currentValue,0);
        const average = sum/arr.length;
        return average;
    }
}

 const num=[7,9,20,89];
 const average=ArrayAverage(num);
 console.log("Average is",average)