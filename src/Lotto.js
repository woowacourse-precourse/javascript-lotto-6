import LottoValidator from './domain/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map(Number);
  }

  #validate(numbers) {
    LottoValidator.validLottoNumber(numbers);
  }

  getLotto() {
    return this.#numbers;
  }

  hasContainBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  // TODO: 당첨번호와 보너스번호를 받아서 포함된 숫자를 카운팅한다.
}

export default Lotto;

// 테스트용 코드
/*
const lottos = '1, 2, 35, 4, 5, 6'.split(',').map((number) => number.trim());
const lotto = new Lotto(lottos);
lotto.getLotto();
*/
