function mergesort(arr) {
    if (arr.length <=1)return arr;
    const mid = parseInt(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergesort(leftArr), mergesort(rightArr))
  }
  
function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }
  
const arr = [80, 200, -20, 15, 40, -16];
console.log(mergesort(arr)); 