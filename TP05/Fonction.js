function multiplierPar(n) {
  return function(nb) {
    return nb * n;
  }
}

let var1 = multiplierPar(4);
let var2 = multiplierPar(7);

console.log(var1(10)); 
console.log(var2(5)); 
