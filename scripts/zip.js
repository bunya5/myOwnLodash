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
