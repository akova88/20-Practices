// Bài 18: Tìm số chẵn đầu tiên trong ma trận

let matrix2 = [
    [ 21, 11, -3, -7 ],
    [ 23, 11, -3, 31 ],
    [ 20, 11, -2, 30 ],
    [ 19, 11, -2, 30 ],
    [ 18, 11, -2, 30 ]
  ];

  for ( var i = 0; i < matrix2.length; i++ ) {
    for ( var j = 0; j < matrix2[i].length; j++) {
        if ( matrix2[i][j] % 2 == 0) {
           return console.log(matrix2[i][j]);
        }
    }
  }