function FindAverage(arr){
    if(arr.length === 0){
        return 0;
    }else{
        let sum = 0;
        let average;
        for(let i=0;i<arr.length-1;i++){
            sum += arr[i];
        }
        average = sum/arr.length;
        return average;
    }
    
}

const numbers=[3,5,7,8,9];
const average=FindAverage(numbers);
console.log(average);