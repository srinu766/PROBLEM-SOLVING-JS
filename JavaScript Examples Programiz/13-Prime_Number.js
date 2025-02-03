let num = 5;

function checkPrime(n) {
  let isPrime = true;

  if (n == 1) {
    console.log("1 is not a prime nor a prime");
  } else if (n > 1) {
    for (var i = 2; i < n / 2; i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(n + " is a prime number");
    } else {
      console.log(n + " is not prime number");
    }
  }
}

checkPrime(num);
