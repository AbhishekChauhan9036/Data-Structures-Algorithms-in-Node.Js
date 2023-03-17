/*Q1. Find the largest three distinct elements in an array

Input: arr[] = {10, 4, 3, 50, 23, 90}
Output: 90, 50, 23*/


function Solve(arr, n) {
  let third = arr[0],second = arr[0],first = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }
  console.log(first+" "+second+" "+third);
}

const arr = [12, 18, 75, 11, 34, 75];
const n = arr.length;
Solve(arr, n);
