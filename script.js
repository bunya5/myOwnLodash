// function chunk(arr, size) {
//   let chunkedArr = [];
//   let arrInChunkedArr = [];
//   let x = 0;
//   for (let y = 0; y < arr.length; y++) {
//     if (!size) {
//       size = 1;
//     }
//     x++;
//     arrInChunkedArr.push(`${arr[y]}`);
//     console.log(`${arr[y]}`);
//     if (x == size || y == arr.length - 1) {
//       chunkedArr.push(arrInChunkedArr);
//       arrInChunkedArr = [];
//       x = 0;
//     }
//   }
//   return chunkedArr;
// }

// let array = [1, 2, 3, 4, 1, 2, 5, 5, 6, 7, 8, 1];
// console.log(chunk(array, 5));

function zip(...arrs) {
  let zippedArrs = [];
  arrs.forEach(arr => {
    for (let i in arr) {
      if (zippedArrs[i] == undefined) zippedArrs.push([]);
      zippedArrs[i].push(arr[i]);
    }
  });
  return zippedArrs;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = ['a', 'b', 'c', 'd'];
let arr3 = [true, false, null, undefined, NaN];
console.log(zip(arr1, arr2, arr3));
