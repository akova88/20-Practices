
    // Bài 1: Tính tổng các giá trị lớn hơn giá trị đứng liền trước nó trong mảng 1 chiều các số thực

    let arr = [2,1,3,4,5,7,5,4,5];
    let sum = 0;

    for ( var i = 1; i <= arr.length; i++) {
        if ( arr[i]> arr[i-1]) {
            sum += arr[i]
        }
    }
    console.log(sum);
 