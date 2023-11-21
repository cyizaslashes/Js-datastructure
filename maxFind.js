

function MaxValueFind(arr){

    if(arr.length === 0){
        return undefined;
    }else{
        let max=arr[0];
        for(let i=0;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i];
                
            }
        }
        return max;
    }
    
}

const num=[34,56,89,130,90];
let max=MaxValueFind(num);
console.log("Average is",max)