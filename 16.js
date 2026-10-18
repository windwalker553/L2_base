// TODO
Array.prototype.square = function() 
{
  return this.map(x => x * x);
};

Array.prototype.cube = function() 
{
  return this.map(x => x * x * x);
};

Array.prototype.sum = function() 
{
  return this.reduce((total, x) => total + x, 0);
};

Array.prototype.average = function() 
{
  if (this.length === 0) return NaN;
  return this.sum() / this.length;
};

Array.prototype.even = function() 
{
  return this.filter(x => x % 2 === 0);
};

Array.prototype.odd = function() 
{
  return this.filter(x => x % 2 != 0);
};

let numbers = [1, 2, 3, 4, 5];
s = numbers.odd();
console.log(s)