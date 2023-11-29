function RemoveVowel(str){
    let Newstr='';
    for(let i=0; i< str.length;i++){
        let currentChar= str[i];
        if('aeuoiAEUIO'.indexOf(currentChar)==-1){
            Newstr += str[i];
           
        }
    }
    return Newstr;
}

let string="abana";
const New=RemoveVowel(string);
console.log(New);