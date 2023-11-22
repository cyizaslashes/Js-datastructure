

function ArraySort(arr){
   
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                 let swap=arr[j];
                 arr[j]=arr[j+1];
                 arr[j+1]=swap;
            }
        }
    }
    return arr;
}
const array =[7,90,78,67];
const sorted=ArraySort(array);
console.log("Sorted array",sorted)