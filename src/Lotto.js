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
      this.sortLottoNumbers(lottoNumber);

      // this.lottoNumbersArray.push(lottoNumber);
    }

    return this.lottoNumbersArray;
  }

  sortLottoNumbers(lottoNumber) {
    this.lottoNumbersArray.push(lottoNumber.sort((num1, num2) => num1 - num2));
  }

  #validate(numbers) {
    if (numbers && numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

export default Lotto;
