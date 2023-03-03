/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length-1;
    while(i<j){
        if(numbers[i]+numbers[j]==target){
            return [i+1,j+1];
        }else if(numbers[i]+numbers[j]<target){
            i++;
        }else{
            j--;
        }
    }
    return -1;   
};
