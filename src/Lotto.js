export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  compare(winningNumbers, winningBonusNumber) {
    const compareResult = {
      mainNumber: 0,
      bonusNumber: false,
    };

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        compareResult.mainNumber += 1;
      }
      if (number === winningBonusNumber) {
        compareResult.bonusNumber = true;
      }
    });

    return compareResult;
  }
}
