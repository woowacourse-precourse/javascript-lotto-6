import { Random } from '@woowacourse/mission-utils';

const MAX_LOTTO_NUMBER = 45;
const MIN_LOTTO_NUMBER = 1;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static generateNumbers() {
    return Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, 6);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    };

    if (this.#hasDuplicate(numbers)) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다."); 
    };
    
    if (!this.#isWithinValidRange(numbers)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.");
    };
  }

  #hasDuplicate(numbers) {
    return new Set(numbers).size !== numbers.length;
  };

  getMatchCount(winningNumbers) {
    return this.#numbers.filter(number => winningNumbers.includes(number)).length;
  };

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  };

  #isWithinValidRange(numbers) {
    return numbers.every(number => number >= MIN_LOTTO_NUMBER && number <= MAX_LOTTO_NUMBER);
  };
  
  
  
}


export default Lotto;
