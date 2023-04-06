// Bài 13: Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không

let arrB = [1, 2, 3, 5, 6, 7, 8, 9, 55, 34, 67, 4, 23];
let arrA = [1, 2, 3, 4, 5, 6];



function checkArrAB(arrA, arrB) {
    let check = true;
    let count = 0;
    for ( var i = 0; i < arrA.length; i++) {
        for ( var j = 0; j < arrB.length; j++) {
            if ( arrA[i] == arrB[j] ) {
                count++;
                break;
            };
        };
        if ( count == arrA.length) {
            check = true;
        } else {check = false}
    };
    
    return check;
};

console.log(checkArrAB(arrA,arrB));



