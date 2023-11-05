import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.lottoNumbersArray = [];
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  generateLottoNumbers(lottoCount) {
    for (let i = 0; i < lottoCount; i += 1) {
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoNumbersArray.push(lottoNumber);
    }
  }

  printLottoNumbersArray() {
    return this.lottoNumbersArray;
  }

  #validate(numbers) {
    if (numbers && numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

export default Lotto;
