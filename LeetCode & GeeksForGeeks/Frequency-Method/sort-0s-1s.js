

class Solution {
    
    sort012(arr, N)
    {
    let start = 0;
    let mid = 0
    let end = N-1
     while(mid <= end){
         if(arr[mid] == 0){
             [arr[start], arr[mid]] = [arr[mid], arr[start]]
             mid++
             start++
         }else if(arr[mid] == 2){
             [arr[end], arr[mid]] = [arr[mid], arr[end]]
             end--
         }else{
             mid++
         }
     }
     return arr
    }
}


//T.C-O(N)
