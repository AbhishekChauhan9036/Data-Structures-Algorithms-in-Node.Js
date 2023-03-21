/*Q4.Binary Search for Rational Numbers without using floating point arithmetic
A rational is represented as p/qb, for example 2/3. Given a sorted array of rational numbers, how to search an element using Binary Search. Use of floating-point arithmetic is not allowed.
Input:  arr[] = {1/5, 2/3, 3/2, 13/2}
x = 3/2
Output: Found at index 2*/


class Rational {
    constructor(p, q) {
        this.p = p;
        this.q = q;
    }
}

function compare(a, b) {
    if (a.p * b.q == a.q * b.p)
        return 0;
    if (a.p * b.q > a.q * b.p)
        return 1;
    return -1;
}

function binarySearch(arr, l, r, x) {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
        if (compare(arr[mid], x) == 0) return mid;
        if (compare(arr[mid], x) > 0)
            return binarySearch(arr, l, mid - 1, x);
        return binarySearch(arr, mid + 1, r, x);
    }
    return -1;
}

const arr = [new Rational(1, 5), new Rational(2, 3), new Rational(3, 2), new Rational(13, 2)];
const x = new Rational(3, 2);
const n = arr.length;
console.log("Element found at index ", binarySearch(arr, 0, n - 1, x));


// Time Complexity: O(log n)
// Auxiliary Space: O(1)