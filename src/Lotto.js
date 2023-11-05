import { MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // make input numer array
    const numberStringsArray = numbers.split(',');
    const numbersArray = numberStringsArray.map((number) => Number(number));

    if (numbersArray.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbersArray.forEach((number) => {
      if (number < 0 || number > 45 || Number.isInteger(number) === false) {
        throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
      }
    });
  }
}

let testclass = new Lotto('1,2,3,4.5,5,6');

export default Lotto;
