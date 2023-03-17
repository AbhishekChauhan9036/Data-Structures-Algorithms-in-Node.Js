function Solve(arr,n){
    let arrsum=0;
    let numsum=parseInt(n*(n+1)/2);
    for(let i=0;i<n-1;i++){
        arrsum+=arr[i];
    }
    console.log(numsum-arrsum);
}

const arr =[ 1, 2, 4, 6, 3, 7, 8];
const n=arr.length;
Solve(arr,n+1);