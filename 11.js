function domainName(url){
  //your code here
  let name_start = -1;
  if (url.includes("http://") || url.includes("https://"))
  {
    name_start = url.indexOf("//") + 2;
  }
  else
  {
    name_start = 0;
  }

  if (url.slice(name_start).startsWith("www.")) 
  {
    name_start += 4;
  }

  let domain_name = "";
  for (let i = name_start; i < url.length; i++)
  {
    if (url[i] == '/' || url[i] == '.')
    {
        break;
    }
    domain_name += url[i];
  }
  return domain_name;
}