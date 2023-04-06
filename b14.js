// Bài 14: Kiểm tra ma trận 2 chiều có toàn dương hay không
function checkMaxtrix(matrix) {
    let check = true;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[i][j] < 0) {
                check = false;
                break;
            }  
        }
    }
    return check;
};

let matrix1 = new Array(5).fill(new Array(4));
for ( var i = 0; i < matrix1.length; i++ ) {
    for ( var j = 0; j < matrix1[i].length; j++ ) {
        matrix1[j][j] = Math.ceil(Math.random() * 30);
    }
}

matrix1[3][2] = -2;
console.log(matrix1);
console.log(checkMaxtrix(matrix1));
