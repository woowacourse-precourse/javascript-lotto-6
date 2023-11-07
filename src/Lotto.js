import LottoRank from './LottoRank.js';

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

  getRank(winningNumbers, bonusNumber) {
    const lottoRank = new LottoRank(this.#numbers, winningNumbers, bonusNumber);
    return lottoRank.getRank();
  }
}

export default Lotto;
