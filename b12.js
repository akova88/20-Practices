// Bài 12: Kiểm tra mảng có tăng dần hay không
let arr = [1, 3, 5, 6, 7, 8, 9, 55, 34, 67, 23];
let arr1 = [1, 2, 3, 4, 5, 6];

function checkArray(arr) {
    let check = true
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] > arr[i+1]) {
            check = false;
            break;
        } else {
            check = true;
        };
    }
    return check;
};

console.log(checkArray(arr));
console.log(checkArray(arr1));

