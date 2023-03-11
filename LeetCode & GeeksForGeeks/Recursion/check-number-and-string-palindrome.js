// Number Palindrome............................................................
function nPalindrome(a,k) {
    if(a==0)return k;
     k=(k*10)+(a%10);
     return nPalindrome(parseInt(a/10),k);
}

let num=12321;
let ans=(nPalindrome(num,0));
console.log(num==ans?"Yes":"No");




// String Palindrome............................................................ 
function stringPalindrome(str,st,end){
    if(st>=end)return true;
    else{
        return ((str[st]==str[end])&& stringPalindrome(str,st+1,end-1));
    }
}

let str="aba";
console.log(stringPalindrome(str,0,str.length-1));