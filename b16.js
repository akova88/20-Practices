// Bài 16: Kiểm tra ma trận có tồn tại số lẻ hay không
function checkMatrix_odd(matrix) {
    let check = false;
    for ( var i = 0; i < matrix.length; i++ ) {
        for ( j = 0; j < matrix[j].length; j ++) {
            if ( matrix[i][j] % 2 !== 0 ) {
                check = true;
                break;
            }
        }
    }
    return check;
};

let matrix3 = [
    [ 22, 12, -2, 30 ],
    [ 22, 12, -2, 30 ],
    [ 20, 12, -2, 30 ],
    [ 18, 12, -2, 30 ],
    [ 18, 12, -2, 31 ]
  ];

console.log(checkMatrix_odd(matrix3));