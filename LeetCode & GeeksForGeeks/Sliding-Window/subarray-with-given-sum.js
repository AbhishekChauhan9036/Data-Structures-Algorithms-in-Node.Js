class Solution 
{
    subarraySum(arr, n, s)
    {
        var a=[];
        var start=0,sum=0;
        for(var i=0;i<n;i++){
            sum+=arr[i];
            while(sum>s){
                sum-=arr[start];
                start++;
            }
            if(sum==s && sum!=0){
                a.push(start+1);
                a.push(i+1);
                return a;
            }
        }
        a.push(-1);
        return a;
    }
}
