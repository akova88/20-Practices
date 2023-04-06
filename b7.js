// Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên

let arr = [2, 3, 4, 5, 9, 5, 16, 20];

for ( var i = 0; i < arr.length; i++ ) {
    if (Math.sqrt(arr[i]) % 1 == 0) {
        console.log(i);
    }
}