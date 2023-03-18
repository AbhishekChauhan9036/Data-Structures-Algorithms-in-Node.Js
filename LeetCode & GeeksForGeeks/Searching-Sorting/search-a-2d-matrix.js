
var searchMatrix = function(matrix, target) {
    let m=matrix.length;
    let n=matrix[0].length;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==target){
                return true;
            }
        }
    }
    return false;
};



var searchMatrix = function(matrix, target) {
    let l = 0,
        r = matrix.length * matrix[0].length - 1
    while (l <= r){
        let mid = Math.ceil( (l + r + 1) / 2) - 1,
            row  = Math.ceil((mid + 1) / matrix[0].length) - 1,
            col = mid % matrix[0].length,
            current  = matrix[row][col]
        if (current === target) return true
        else {
            if (current < target) l = mid + 1
            else r = mid - 1
        }
    }
    return false
};
