const primeNumber = (n) => {
  if (n <= 1) return false;
  let ans = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      ans = false;
      break;
    }
  }
  return ans;
};

const isPrime = (n) => {
  if (n <= 1) return false;
  let ans = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      ans = false;
      break;
    }
  }
  return ans;
};



process.stdout.write(`${primeNumber(5)}\n`);
process.stdout.write(`${primeNumber(6)}\n`);
process.stdout.write(`${isPrime(9)}\n`);
