import { MissionUtils } from "@woowacourse/mission-utils";

import UserInput from '../view/userInput.js';
import makeLottoNumbers from './makeLottoNumbers.js';
import { MESSAGE } from '../data/message.js';
import { ERROR_MESSAGE } from '../data/message.js';

class Lotto {
  #numbers;

  // constructor(amount, lottoNumbers, numbers, bonus) {
  //   this.amount = amount;
  //   this.lottoNumbers = lottoNumbers;
  //   this.#numbers = numbers;
  //   this.bonus = bonus;
  // };

  constructor(numbers) {
    this.UserInput = new UserInput();
    this.amount = 0;
    this.purchasedLotto = [];
    this.#numbers = numbers;
    this.#validate(numbers);
  };

  async RequestInput() {
    this.amount = await this.UserInput.RequestAmount();
    this.purchasedLotto = makeLottoNumbers(this.amount);
    this.test()
  }

  test() {
    console.log(this.amount);
    console.log(this.purchasedLotto);
  }

  #validate(numbers) {
    const filteredNumbers = new Set(numbers);
    if(filteredNumbers.size !== numbers.length) {
        throw new Error(`${ERROR_MESSAGE.NUMBER_DUPLICATED_ERROR}`);
    }
    if (numbers.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.NUMBER_LEGNTH_ERROR}`);
    }
    
    for(const num of numbers) {
      if(+num < 1 || +num > 45) {
        throw new Error(`${ERROR_MESSAGE.NUMBER_RANGE_ERROR}`);
      }
    }
  }

  calculateResult() {
    let result = [];
    for(let lotto = 0; lotto < this.lottoNumbers.length; lotto++) {
      let isBonus = false;
      let count = 0;

      for(let number = 0; number < this.lottoNumbers[lotto].length; number++) {
        if(this.lottoNumbers[lotto].includes(+this.#numbers[number])) {
          count += 1
        }
        if(count === 5 && this.lottoNumbers[lotto].includes(+this.bonus)) {
          isBonus = true;
        }
      }
      if(isBonus) {
        result.push(5.5);
      }
      if(!isBonus && count >= 3) {
        result.push(count);
      }
    }
    const countedResult = result.reduce((allCount, count) => {
      if(count in allCount) {
        allCount[count] += 1;
      } else {
        allCount[count] = 1;
      }

      return allCount;
    }, {});

    this.calculateRate(countedResult);

  };

  calculateRate(result) {
    let sum = 0;
    for(const value of Object.keys(result)) {
      if(value === '3') {
        sum += 5000
      }
      if(value === '4') {
        sum += 50000
      }
      if(value === '5') {
        sum += 1500000
      }
      if(value === '5.5') {
        sum += 30000000
      }
      if(value === '6') {
        sum += 2000000000
      }
    } 
    const rate = ((sum / this.amount) * 100).toFixed(1).toLocaleString();
    this.print(result, rate);
  }

  async print(result, rate) {
    await MissionUtils.Console.print(`${MESSAGE.RESULT_INFO}\n---\n`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_THREE} ${result[3] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_FOUR} ${result[4] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_FIVE} ${result[5] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_FIVE_BOUNS} ${result[5.5] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_SIX} ${result[6] ?? 0}개`);
    await MissionUtils.Console.print(`${MESSAGE.RESULT_RATE} ${rate}%입니다.`);
  }
}

export default Lotto;
