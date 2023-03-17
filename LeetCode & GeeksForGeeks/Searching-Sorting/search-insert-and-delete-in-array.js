/*Q3.Take an integers of array by yourself and Perform following
operations Search, insert and delete in a sorted array*/

function searchElement(arr, n, target) {
    for (let i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

function insertElement(arr, n, element, pos) {
    const ans = [];
    for (i = 0; i < n + 1; i++) {
        if (i < pos - 1) {
            ans[i] = arr[i];
        } else if (i == pos - 1) {
            ans[i] = element;
        } else {
            ans[i] = arr[i - 1];
        }
    }
    return ans;
}

function deleteElement(arr, n, index) {
    const ans = [];
    for (let i = 0, k = 0; i < n; i++) {
        if (i == index) {
            continue;
        }
        ans[k++] = arr[i];
    }
    return ans;
}

const arr = [17, 18, 39, 31, 76, 11];
const n = arr.length,
    target = 39,
    index = 2,
    element = 30,
    pos = 5;
console.log(searchElement(arr, n, target));
console.log(deleteElement(arr, n, index));
console.log(insertElement(arr, n, element, pos));
