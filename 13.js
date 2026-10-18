function hexStringToRGB(hexString) {
  let map = {};
  hexString = hexString.replace('#', '');
  
  let digit_map = {
    '0': 0, '6': 6, 'c': 12,
    '1': 1, '7': 7, 'd': 13,
    '2': 2, '8': 8, 'e': 14,
    '3': 3, '9': 9, 'f': 15,
    '4': 4, 'a': 10,
    '5': 5, 'b': 11,
  };

  const digits = [];
  for (let i = 0, j = 1; j < hexString.length; i += 2, j += 2)
  {
    let double = "";
    double += hexString[i];
    double += hexString[j];

    let first_digit = digit_map[double[0].toLowerCase()] * 16;
    let second_digit = digit_map[double[1].toLowerCase()];
    let res = first_digit + second_digit;

    digits.push(res);
  }
  
  map['r'] = digits[0];
  map['g'] = digits[1];
  map['b'] = digits[2];
  return map;
}