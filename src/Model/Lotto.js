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
      this.#numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.sortLottoNumbers();
    }

    return this.lottoNumbersArray;
  }

  sortLottoNumbers() {
    this.lottoNumbersArray.push(this.#numbers.sort((num1, num2) => num1 - num2));
  }

  #validate(numbers) {
    if (numbers && numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

export default Lotto;
