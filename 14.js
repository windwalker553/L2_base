function isCircleSorted( arr ){
  // ...
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++)
  {
    if (arr[i] > arr[i + 1])
        count++;
  }
  if (arr[arr.length - 1] > arr[0])
    count++;
  if (count <= 1)
    return true;
  else
    return false;
}