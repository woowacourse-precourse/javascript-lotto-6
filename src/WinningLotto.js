const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

class WinningLotto {
  #numbers;

  constructor(numbers) {
    this.validateLength(numbers);
    this.validateNumbers(numbers);
    this.#numbers = numbers;
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  validateNumbers(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(Number(number))) {
        throw new Error('[ERROR] 숫자를 입력해주세요.');
      }

      if (Number(number) < MIN_NUMBER || Number(number) > MAX_NUMBER) {
        throw new Error('[ERROR] 1부터 45 사이의 숫자를 입력해주세요.');
      }

      if (numbers.indexOf(number) !== numbers.lastIndexOf(number)) {
        throw new Error('[ERROR] 중복된 숫자가 있는지 확인해주세요.');
      }
    });
  }

  validateBonusLotto(bonusLotto) {
    const parsedBonusLotto = Number(bonusLotto);
    if (parsedBonusLotto === 0 || Number.isNaN(parsedBonusLotto)) {
      throw new Error('[ERROR] 입력된 값을 확인해주세요.');
    }

    if (
      !Number.isInteger(parsedBonusLotto) ||
      parsedBonusLotto < MIN_NUMBER ||
      parsedBonusLotto > MAX_NUMBER
    ) {
      throw new Error('[ERROR] 1부터 45 사이의 정수를 입력해주세요.');
    }

    if (this.#numbers.includes(bonusLotto)) {
      throw new Error('[ERROR] 당첨번호와 중복된 숫자가 있는지 확인해주세요.');
    }
  }

  getWinningLotto() {
    return this.#numbers;
  }
}

export default WinningLotto;
