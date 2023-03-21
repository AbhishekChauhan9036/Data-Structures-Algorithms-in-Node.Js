function selectionSort(arr, n) {
    var i, j, idx;
    for (i = 0; i < n - 1; i++) {
        idx = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] < arr[idx])
                idx = j;

        [[arr[i], arr[idx]] = [arr[idx], arr[i]]];
    }
    return arr;
}

var arr = [64, -25, -120, 202, 11];
var n = arr.length;
console.log(selectionSort(arr, n));
