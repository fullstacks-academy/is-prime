function isPrime(n) {
  for (var i = 1; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
