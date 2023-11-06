import GameCalculator from './GameCalculator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현

  get lottoNumbers() {
    return this.#numbers;
  }

  getResultForEachLotto(bonusNumber, winningNumber) {
    const GAME_CALCULATOR = new GameCalculator(this.lottoNumbers, bonusNumber, winningNumber);
  }
}

export default Lotto;
