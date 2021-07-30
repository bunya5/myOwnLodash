function zipObject(arr1, arr2) {
  let newObject = {};
  for (let i in arr1) {
    if (arr2[i] === undefined) arr2[i] = '';
    newObject[`${arr1[i]}`] = `${arr2[i]}`;
  }
  return newObject;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(zipObject(arr1, arr2));
