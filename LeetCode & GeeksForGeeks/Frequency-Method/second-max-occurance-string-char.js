function secondMaxChar(s) {
   const map={};
   let max=0,maxchar1="",maxchar2="";
   for(let i=0;i<s.length;i++){
      map[s[i]]=(map[s[i]]||0)+1;
   }
   for(let i in map){
     if(map[i]>max){
        max=map[i];
        maxchar2=maxchar1;
        maxchar1=i;
     }else if(i>maxchar2 && i!=maxchar1){
        maxchar2=i;
     }
   }
   return maxchar2;
}
var str = 'abbcccc';
console.log(secondMaxChar(str));
