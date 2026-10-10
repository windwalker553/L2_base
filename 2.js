function ipv4Parser(ip, mask){
  //your code here
  const ipArray = ip.split('.');
  const maskArray = mask.split('.');
  
  const network = [];
  const host = [];
  
  for (let i = 0; i < 4; i++)
    {
      const ipByte = Number(ipArray[i]);
      const maskByte = Number(maskArray[i]);
      
      network.push(ipByte & maskByte);
      host.push(ipByte & ~maskByte & 255);
    }
  
  return [network.join('.'), host.join('.')];
}