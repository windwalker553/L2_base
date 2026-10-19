function wave(str){
  //TODO
  str = str.toLowerCase();
  const words = [];

  for (let i = 0; i < str.length; i++) 
  {
    if (str[i] == ' ')
    {
      continue;
    }

    let current_word = str.split('');
    current_word[i] = current_word[i].toUpperCase();
    words.push(current_word.join(''));
  }

  return words;
}