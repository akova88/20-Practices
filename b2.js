// Bài 2: Tính trung bình cộng các số dương trong mảng 1 chiều các số thực
let arr = [3, 5, 8, 9, -7, -2, 8];
let sum = 0;
let count = 0;

for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] > 0 ) {
        sum += arr[i];
        count++;
    }
}
let avg = sum / count;

console.log(avg);