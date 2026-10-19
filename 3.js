function whatCentury(year)
{
  // code must go here
  const century = Math.ceil(Number(year) / 100);
  
  let suf = "th";

  if (century >= 11 && century <= 13) {
    return century + "th";
  }
  else if (century % 10 == 1) suf = "st";
  else if (century % 10 == 2) suf = "nd";
  else if (century % 10 == 3) suf = "rd";

  return century + suf;
}