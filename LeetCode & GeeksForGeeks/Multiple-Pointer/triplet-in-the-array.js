/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {boolean}
*/

class Solution {
    //Function to find triplets with zero sum.
    findTriplets(arr, n)
    {
        //your code here
         arr = arr.sort((a,b)=> a-b);
         for(let i=0;i<n;i++){
             let j =i+1; let k =n-1;
             while(j<k){
                 if(arr[i]+arr[j]+arr[k] == 0)
                    return true;
                else if(arr[i]+arr[j]+arr[k] < 0)
                    j++;
                else 
                    k--;
             }
         }
         return false;
    }
}
