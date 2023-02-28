function maxSubArraySum(a, size) {
  var max = a[0];
  var sum = 0;

  for (var i = 0; i < size; i++) {
    sum = sum + a[i];
    if (max < sum) max = sum;

    if (sum < 0) sum= 0;
  }
  return max;
}

var a = [-100 ,-990 ,-10 ,-1 ,-5];
console.log(maxSubArraySum(a, a.length));
