import { Console } from '@woowacourse/mission-utils';
import { TEXT, OUTPUT_RANK } from './data.js';

class PrizeValidator {
  constructor() {
    this.initPrize();
    this.initRank();
    this.result = 0;
  }

  initPrize() {
    this.prize = {
      '1등': 2000000000,
      '2등': 3000000,
      '3등': 1500000,
      '4등': 50000,
      '5등': 5000,
    };
  }

  initRank() {
    this.rank = {
      '1등': 0,
      '2등': 0,
      '3등': 0,
      '4등': 0,
      '5등': 0,
    };
  }

  calculateRank(matchingNumber, matchingBonus) {
    matchingNumber.forEach((number, index) => {
      if (number === 3) this.rank['5등'] += 1;
      if (number === 4) this.rank['4등'] += 1;
      if (number === 5) {
        if (number === 5 && matchingBonus[index] === 1) {
          this.rank['2등'] += 1;
        } else {
          this.rank['3등'] += 1;
        }
      }
      if (number === 6) this.rank['1등'] += 1;
    });
  }

  printRank() {
    Console.print(TEXT.OUTPUT_PRIZE);
    Object.values(this.rank).forEach((value, index) => {
      Console.print(
        Object.values(OUTPUT_RANK)[index] + value + TEXT.OUTPUT_ITEM,
      );
    });
  }

  calculateResult() {
    Object.values(this.rank).forEach((value, index) => {
      this.result += value * Object.values(this.prize)[index];
    });
  }

  validate(matchingNumber, matchingBonus, inputAmount) {
    this.calculateRank(matchingNumber, matchingBonus);
    this.printRank();
    this.calculateResult();
    const earnRatio = `${((this.result / inputAmount) * 100).toFixed(1)}%`;
    Console.print(`${TEXT.OUTPUT_RESULT}${earnRatio}입니다.`);
  }
}

export default PrizeValidator;
