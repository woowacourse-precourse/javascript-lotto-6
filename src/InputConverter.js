export class InputConverter {
  moneyConverter(money) {
    return Number(money);
  }

  winningNumbersConverter(numbers) {
    return numbers.split(",").map(Number);
  }

  bonusNumberConverter(number) {
    return Number(number);
  }
}
