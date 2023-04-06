// Bài 17: Liệt kê các dòng giảm dần trong ma trận

let matrix2 = [
    [ 22, 11, -2, -7 ],
    [ 23, 11, -2, 30 ],
    [ 20, 11, -2, 30 ],
    [ 19, 11, -2, 30 ],
    [ 18, 11, -2, 30 ]
  ];


  for ( var i = 0; i < matrix2.length; i ++) {
    
    let check = true;
    for ( var j = 0; j < matrix2[j].length; j ++) {
        if ( matrix2[i][j] < matrix2[i][j+1]) {
            check = false;
            break;
        } 
    }
    console.log(i +' + '+check );
  }