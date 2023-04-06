// Bài 10: Hãy xác định số lượng phần tử kề nhau mà cả 2 đều chẵn

let arr = [1, 3, 5, 6, 7, 8, 4, 6, 9, 55, 34, 67, 23];
let count = 0;
for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] % 2 == 0 && arr[i+1] % 2 == 0 ) {
        count++;
    }  
}

console.log(count);