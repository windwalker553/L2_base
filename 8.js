function expandedForm(num) {
  // Your code here
  const numStr = num.toString();
  const result = [];

  for (let i = 0; i < numStr.length; i++) 
  {
    let digit = numStr[i];
    if (digit != '0')
    {
        let zerosCount = numStr.length - 1 - i;
        let value = digit + '0'.repeat(zerosCount);

        result.push(value);
    }  
  }
  let result_str = result.join(' + ');
  return result_str;
}