// Bài 11: Kiểm tra mảng có đối xứng không? Có trả về 1, không có trả về 0

let arr = [1, 3, 5, 6, 7, 8, 9, 55, 34, 67, 23];
let arr1 = [1, 2, 3, 3, 2, 1];

function checkSymmetry(ar) {
    let check;
    for ( var i = 0; i <= ar.length/2; i++) {
        if ( ar[i] !== ar[ar.length-1-i]) {
            check = 0;
            break;
        } else {
            check = 1;
        }
    }
    return check;
}

console.log(checkSymmetry(arr));
console.log(checkSymmetry(arr1));