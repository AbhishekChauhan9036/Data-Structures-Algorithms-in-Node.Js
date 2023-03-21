
// https://leetcode.com/problems/k-th-smallest-prime-fraction/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const kthSmallestPrimeFraction = (a, k) => {
    let n = a.length, d = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            d.push([a[i], a[j]]); // find all possible combinations
        }
    }
    d.sort((x, y) => x[0] / x[1] - y[0] / y[1]); // sort by actual value of fraction increasing
    return d[k - 1];
};