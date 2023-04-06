// Bài 3: Đưa các số chia hết cho 3 về đầu mảng

let arr = [4, 3, 2, 9, 12, 7, 21, 18];
let index = 0;
let temp;
for( var i = 0; i < arr.length; i++) {
    if ( arr[i] % 3 == 0) {
        temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
        index += 1;
    }
    
}
console.log(arr);
