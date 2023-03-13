function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivot = partition(arr, left, right)
      quickSort(arr, left, pivot - 1)
      quickSort(arr, pivot + 1, right)
    }
    return arr
  }
  
  function partition(arr, left, right) {
    let pivot = arr[right]
    let i = left
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        [arr[i],arr[j]]=[arr[j],arr[i]];
        i++;
      }
    }
    [arr[i],arr[right]]=[arr[right],arr[i]];
    return i;
  }
  
  const arr1 = [-16, 206, -18, 40, 17];
  quickSort(arr1);
  console.log(arr1);
  
  