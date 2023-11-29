 function CheckPalidrome(arr){
    let len=arr.length;
    for(let i=0;i<len/2;i++){
        if(arr[i]!==arr[len-1-i]){
            return false;
        }
        return true;
    }
 }

 let num=[1,2,3,4,3,];
 const isPalidrome=CheckPalidrome(num);
 console.log("Is Palidrome",isPalidrome)