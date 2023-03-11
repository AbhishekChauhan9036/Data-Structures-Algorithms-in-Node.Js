function sum(n,arr) {
    if(n<=0)return n;
    return (sum(n-1,arr))+(arr[n-1]);
}

const arr=[10,20,30,40];
console.log(sum(arr.length,arr));