export class InputConverter {
  moneyConverter(money) {
    return Number(money);
  }

  winningNumbersConverter(numbers) {
    return numbers.split(",").map(Number);
  }
}

const inputConverter = new InputConverter();
console.log(inputConverter.winningNumbersConverter("1,2,3,4,5,6"));
