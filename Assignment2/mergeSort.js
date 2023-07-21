function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let left = mergeSort(arr.slice(0, arr.length / 2));
  let right = mergeSort(arr.slice(arr.length / 2));
  let mergedArr = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) mergedArr.push(left.shift());
    else mergedArr.push(right.shift());
  }

  if (left.length > 0) mergedArr.push(...left);
  else if (right.length > 0) {
    mergedArr.push(...right);
  }

  return mergedArr;
}

console.log(mergeSort([9, -1, 73, -35, 97, -14, 92, -54, -90, -14]));
