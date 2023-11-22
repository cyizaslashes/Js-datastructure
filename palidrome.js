 function CheckPalidrome(arr){
    let len=arr.length;
    for(let i=0;i<len/2;i++){
        if(arr[i]!==arr[len-i]){
            return true;
        }
        return false;
    }
 }

 let num=[1,2,3,3,2,1];
 const isPalidrome=CheckPalidrome(num);
 console.log("Is Palidrome",isPalidrome)