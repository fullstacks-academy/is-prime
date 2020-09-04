function isPrime(n) {
  for(var i = 0; i < n; i++) {
    if(n%i===0) return false;
  }
  return true
}
