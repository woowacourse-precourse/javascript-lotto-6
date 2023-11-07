const validation = require("./Validation.js");

class winningNumbers {
  constructor(numbers) {
    this.validate(numbers);
    this.value = numbers;
  }

  validate(numbers) {
    validation.checkNumberList(numbers);
  }
}

module.exports = winningNumbers;
