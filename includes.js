 function CheckTarget(arr,Target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===Target){
            return true;
        }else{
            return false;
        }
    }
 }

 const num=[7,9,0,6,56];
 const tar=8;
 const isContained=CheckTarget(num,tar);
 console.log(isContained)