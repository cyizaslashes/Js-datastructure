 function MinimumFind(arr){
    if( arr.length === 0){
        return unidentified;
    }else{
        let min=arr[0];
        for(let i=0;i<arr.length;i++){
              if(arr[i]<min){
                 min=arr[i]
              }
            }
            return min;
    }
 }

 const numbers=[78,0,-3,-7]
 let MinimumValue=MinimumFind(numbers);
 console.log("The minimum value is",MinimumValue)