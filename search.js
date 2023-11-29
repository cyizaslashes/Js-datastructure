function searchElement(arr,tar){
   if(arr.length == tar){
    return true;
   } else{
    return false;
   }
}
const target = 7;
const num=[8,0,-8,-7,6];
const element=searchElement(num,target);
console.log(element);