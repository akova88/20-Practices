// Bài 4: Đảo ngược mảng ban đầu
let arr = [1, 2, 3, 5, 6, 7];


for ( var i = 0; i < arr.length/2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);
