function BubbleSort(arr){
    let len=arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                let swap=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=swap;
            }
        }
    }
    return arr;
}

const num=[5,100,89,0];
const sorted=BubbleSort(num);
console.log(sorted);
