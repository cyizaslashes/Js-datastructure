

function reverseFunction(arr){

     let start=0;
     let end= arr.length-1;
        while(start<end){
            let swap=arr[start];
            arr[start]=arr[end];
            arr[end]=swap;
            start ++
            end--
        }
  return arr;
}

const numbers=[9,56,45,34];
console.log("initial array",numbers);
const reversedArray=reverseFunction(numbers);
console.log("The reverses array",reversedArray)