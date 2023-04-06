// Bài 8: Đếm số dương chia hết cho 7 trong mảng

let arr = [8, -6, 2, -5, -7, 4, 28, 3 ];
let cout = 0;
for(var i = 0; i < arr.length; i++) {
    if ( arr[i] % 7 ) {
        cout++;
    }
}