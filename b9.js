// Bài 9: Đếm số nguyên tố trong mảng

let arr = [1, 3, 5, 6, 7, 8, 9, 55, 34, 67, 23];

function isPrime(number) {
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (var i = 2; i < number - 1; i++) {
            if (number % i == 0) {
                isPrime = false;
            }
        };
    }
    return isPrime;
};
let count = 0;
for (i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        count++;
    }
}

console.log(count);
