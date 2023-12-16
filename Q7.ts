
function checkDivisibility(number:number): void {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(`${number} is divisible by both 3 and 5.`);
    } else if (number % 3 === 0) {
      console.log(`${number} is divisible by 3.`);
    } else if (number % 5 === 0) {
      console.log(`${number} is divisible by 5.`);
    } else {
      console.log(`${number} is not divisible by 3 or 5.`);
    }
  }
  checkDivisibility(6)