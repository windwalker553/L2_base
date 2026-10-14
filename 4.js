function findMissing(list) {  
  let actual_sum = 0;
  for (let i = 0; i < list.length; i++)
    {
      actual_sum += list[i];
    }
  
  const step = (list[list.length - 1] - list[0]) / list.length;
  
  let ideal_sum = 0;
  let current_number = list[0];
  
  for (let i = 0; i <= list.length; i++)
    {
      ideal_sum += current_number;
      current_number += step;
    }
  
  return ideal_sum - actual_sum;
}