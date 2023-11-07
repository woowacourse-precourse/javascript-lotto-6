/* eslint-disable default-case */
import App from './App.js';
import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  async #validate(numbers) {
    const WARNING = '[ERROR] 잘못된 입력입니다. 1~45 안의 중복되지 않는 정수를 6개 입력하시오.'
      if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      if ([...new Set(numbers)].length !== 6) throw new Error(WARNING);
      numbers.forEach((number) => {
        if (number > 45 || number < 1) throw new Error(WARNING);
        if (!Number.isInteger(number)) throw new Error(WARNING);
      });  
  }



  validateInputNumber = async() => {
    try {
      this.#validate(this.#numbers);
    } catch {
      const app = new App();
      await app.getNumbers();
    }
  }
  
  compareNumbers(published) {
    const compare = this.#numbers.filter(x => published.includes(x));
    return compare.length;
  }
}


export default Lotto;
