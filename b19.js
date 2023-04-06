// Bài 19: Tìm số chẵn lớn nhất trong ma trận

let matrix = [
    [ 21, 11, -3, -7 ],
    [ 23, 11, -3, 31 ],
    [ 20, 11, -2, 30 ],
    [ 19, 40, -2, 30 ],
    [ 18, 11, -2, 32 ]
  ];

  let arrEven = [];
  for ( var i = 0; i < matrix.length; i++ ) {
    for ( var j = 0; j < matrix[i].length; j++) {
        if ( matrix[i][j] % 2 == 0) {
           arrEven.push(matrix[i][j]);
        }
    }
  };
  console.log(arrEven);
  let max = arrEven[0];
  for ( var z = 0; z < arrEven.length; z++ ) {
    if ( max < arrEven[z]) {
        max = arrEven[z];
    }
  }
  console.log(max);