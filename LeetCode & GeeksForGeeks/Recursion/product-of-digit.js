function productDigit(n){
    let mul=1;
    if(n==1){
        return 1;
    }else{
        mul=mul*n%10;
        mul=mul*productDigit(parseInt(n/10));
        return mul;
    }
}

console.log(productDigit(1234));