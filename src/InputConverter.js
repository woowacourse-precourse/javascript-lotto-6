export class InputConverter {
  winningNumbersConverter(numbers) {
    return numbers.split(",").map(Number);
  }
}
