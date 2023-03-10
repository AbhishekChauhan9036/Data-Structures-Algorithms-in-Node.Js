var myPow = function(x,y){
    var mod = 1000000007n;
    if(y===0)return 1n;
    var temp = 1n;
    temp *= myPow(x,parseInt(y/2)); 
    temp *= temp;
    if(y%2===1){
        temp *= BigInt(x);
    }
    temp %= mod;
    return temp;    
}
var countGoodNumbers = function(n) {
    var mod = 1000000007n;
    var even = Math.ceil(n/2);
    var odd = n - even; 
    var ans = myPow(5, even) * myPow(4, odd);
    ans %= mod; 
    return Number(ans);
};
