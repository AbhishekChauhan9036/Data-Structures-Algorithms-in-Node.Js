var closestPair=function(arr,x){
   var ans=[];
   var i=0;
   var j=arr.length-1;
   var diff=Number.MAX_VALUE,s=0;
        while(i<j){
            s=arr[i]+arr[j];
            if(Math.abs(x-s)<diff){
                diff=Math.abs(x-s);
                ans[0]=arr[i];
                ans[1]=arr[j];
            }
            if(s>x){
                j--;
            }
            else{
                i++;
            }
        }
        return ans;
}


var arr = [1, 2, 3, 4, 5];
var x = 13;
console.log(closestPair(arr,x));
