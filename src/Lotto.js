class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    if (!numbers.every((num) => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
  get numbers() {
    return this.#numbers;
  }
}
/* 보너스 번호 검증 어떻게?
function validateWinningNumbers(winningNumbers, bonusNumber) {
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error("[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.");
  }
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  }
}*/
export default Lotto;
