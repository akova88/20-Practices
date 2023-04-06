// Bài 15: Kiểm tra một cột ma trận có giảm dần hay không

function checkMatrix_dec(matrix) {
    let check = true;
    for (var i = 0; i < matrix.length -1; i++) {
        
            if (matrix[i][0] < matrix[i+1][0]) {
                check = false;
                break;
            }  
        
    }
    return check;
}


let matrix2 = [
    [ 22, 11, -2, 30 ],
    [ 23, 11, -2, 30 ],
    [ 20, 11, -2, 30 ],
    [ 19, 11, -2, 30 ],
    [ 18, 11, -2, 30 ]
  ];

  console.log(checkMatrix_dec(matrix2));