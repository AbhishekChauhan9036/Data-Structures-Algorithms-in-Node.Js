// Example:- 0,1,1,2,3
function fibonacci(n){
    const fib=[0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-2]+fib[i-1];
    }
    return fib;
}

const numFib=(n)=>{
    let n1=0;
    let n2=1;let sum=0;
    for(let i=1;i<=n;i++){
        sum=n1+n2;
        n1=n2;
        n2=sum;
        console.log(sum);
    }
};

console.log(fibonacci(4));
numFib(3);