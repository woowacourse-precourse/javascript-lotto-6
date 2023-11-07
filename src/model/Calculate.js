import { REWORD } from '../data/reward.js';

class Calculate {
  #amount;
  #numbers;
  #issuedLotto;
  #bonus;
  #isBonus;
  #count;

  constructor(amount, arrays, numbers, bonus) {
    this.#amount = amount;
    this.#issuedLotto = arrays;
    this.#numbers = numbers;
    this.#bonus = bonus;
    this.sum = 0;
  }

  count() {
    let result = [];
    for(let lotto = 0; lotto < this.#issuedLotto.length; lotto++) {
      this.#count = 0;
      this.#isBonus = false;
      for(let number = 0; number < this.#issuedLotto[lotto].length; number++) {
        this.#countNumbers(lotto, number);
      }
      if(this.#isBonus && this.#count === 5) {
        result.push('bonus');
      }
      this.#onPushResult(result);
    }

    return result;
  };

  #isCheckBonus(lotto) {
    if(this.#issuedLotto[lotto].includes(+this.#bonus)) {
      this.#isBonus = true;
    }

    return this.#isBonus;
  }

  #isCheckCorrectNumber(lotto, number) {
    if(this.#issuedLotto[lotto].includes(+this.#numbers[number])) {
      this.#count += 1
    }

    return this.#count;
  }

  #onPushResult(result) {
    if(!this.#isBonus && this.#count >= 3) {
      result.push(this.#count);
    }

    return result;
  }

  #countNumbers(lotto, number) {
    this.#isCheckCorrectNumber(lotto, number);
    if (this.#count === 5) {
      this.#isCheckBonus(lotto);
    }
  }
  
  collect(result) {
    return result.reduce((allCount, count) => {
      if(count in allCount) {
        allCount[count] += 1;
      } else {
        allCount[count] = 1;
      }

      return allCount;
    }, {});
  }
  
  rate(result) {
    for(const value of Object.keys(result)) {
      this.#onSwitch(value);
    } 
    const rate = ((this.sum / this.#amount) * 100).toFixed(1).toLocaleString();

    return rate;
  }

  #onSwitch(value) {
    switch(value) {
      case '3':
        this.sum += `${REWORD.FIFTH_PLACE}`;
        break;
      case '4':
        this.sum += `${REWORD.FOURTH_PLACE}`;
        break;
      case '5':
        this.sum += `${REWORD.THIRD_PLACE}`;
        break;
      case 'bonus':
        this.sum += `${REWORD.SECOND_PLACE}`;
        break;
      case '6':
        this.sum += `${REWORD.FIRST_PLACE}`;
        break;
    }
  }
}

export default Calculate;