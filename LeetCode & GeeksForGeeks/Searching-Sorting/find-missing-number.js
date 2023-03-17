/*Q2.Find the Missing Number
Given an array arr[] of size N-1 with integers in the range of [1, N], the task is 
to find the missing number from the first N integers.
Note: There are no duplicates in the list.
Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
Output: 5*/


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