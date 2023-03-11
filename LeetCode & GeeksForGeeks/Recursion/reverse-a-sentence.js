function reverse(str) {
    if(str.length<=1)return str;
    return reverse(str.slice(1,str.length))+str[0];
}

let str="Mohan is going to market"
console.log(reverse(str));

