function fibbonacci(a) {
    if(a==1||a==2)return 1;
   return fibbonacci(a-1)+fibbonacci(a-2);
}

console.log(fibbonacci(5));
   