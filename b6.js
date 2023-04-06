// Bài 6: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện lớn hơn giá trị tuyệt đối của giá trị đứng liền sau nó

let arr = [8, -6, 2, -5, -8, 4, 5, 3 ];

for ( var i = 0; i < arr.length; i++ ) {
    if( arr[i] > Math.abs(arr[i+1])) {
        console.log(arr[i]);
    }
} 