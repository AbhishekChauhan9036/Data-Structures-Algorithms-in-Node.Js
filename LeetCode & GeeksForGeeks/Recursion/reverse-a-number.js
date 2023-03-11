function reverse(a,k) {
    if(a==0)return k;
     k=(k*10)+(a%10);
     return reverse(parseInt(a/10),k);
}

let num=12781;
let ans=(reverse(num,0));
console.log(ans);