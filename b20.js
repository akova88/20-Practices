// Bài 20: Liệt kê các dòng có tổng lớn nhất

let matrix = [
    [21, 11, -3, -7],
    [23, 11, -3, 31],
    [20, 11, -2, 60],
    [19, 40, -2, 30],
    [18, 11, -2, 32]
];

let arr = [];

for (var i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (var j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    };
    arr.push(sum);
};
console.log(arr);
let max = arr[0];
for (i = 0; i < arr.length; i++) {
    if ( max < arr[i]) {
        max = arr[i];
    }
};
console.log(max);
