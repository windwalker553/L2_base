function toWeirdCase(string){
  //TODO
  const words = string.toLowerCase().split(' ');
  
  for (let i = 0; i < words.length; i++)
  {
    let current_word = words[i];
    let new_word = "";

    for (let j = 0; j < current_word.length; j++)
    {
        if (j % 2 == 0)
        {
            new_word += current_word[j].toUpperCase();
        }
        else
        {
            new_word += current_word[j];
        }
    }

    words[i] = new_word;
  }
  
  string = words.join(' ');
  return string;
}