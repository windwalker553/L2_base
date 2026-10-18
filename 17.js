function cache(func) {
  const memory = {};
  
  return function(...args) 
  {
    const key = JSON.stringify(args);
    
    if (key in memory) 
    {
      return memory[key];
    }
    
    const result = func(...args);
    memory[key] = result;
    return result;
  };
}