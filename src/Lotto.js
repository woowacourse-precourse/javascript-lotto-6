import { Random, Console } from "@woowacourse/mission-utils";
import { ERROR, INPUT, RESULT } from "./Message.js";
class Lotto {
  #drawNumbers;

  constructor(numbers) {
    this.#validateDraw(numbers);
    this.#validateBonus(numbers);
    this.#drawNumbers = numbers;
    this.statCount = [0, 0, 0, 0, 0];
    this.rank = 0;
  }

  getRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
  }

  getLottoNumbers(amount) {
    const lottoNumbers = [];
    for (let i = 0; i < amount; i++) {
      lottoNumbers.push(this.getRandomNumbers());
    }
    const sortedLottoNumbers = lottoNumbers.map((lottoNumber) => lottoNumber.sort((a, b) => a - b));
    return sortedLottoNumbers;
  }

  printLottoNumbers(lottoNumbers) {
    for (let i = 0; i < lottoNumbers.length; i++) {
      const lottoNumbersToString = `[${lottoNumbers[i].join(", ")}]`;
      Console.print(lottoNumbersToString);
    }
  }

  async enterDrawNumbers() {
    try {
      const input = await Console.readLineAsync(INPUT.DRAW);
      const number = input.split(",");
      this.#drawNumbers = number;
      return this.#validateDraw(number).map(Number);
    } catch (error) {
      Console.print(error.message);
      await this.enterDrawNumbers();
    }
  }

  async enterBonusNumber() {
    try {
      const input = await Console.readLineAsync(INPUT.BONUS);
      const number = input.split(",");
      return this.#validateBonus(number).map(Number);
    } catch (error) {
      Console.print(error.message);
      await this.enterBonusNumber();
    }
  }

  #validateDraw(numbers) {
    if (!numbers) {
      return;
    }
    if (this.isNotInRange(numbers)) {
      throw new Error(ERROR.NOT_IN_RANGE);
    }
    if (this.isNotSix(numbers)) {
      throw new Error(ERROR.NOT_SIX);
    }
    if (this.isDuplicate(numbers)) {
      throw new Error(ERROR.DUPLICATE_DRAW);
    }
    return numbers;
  }

  #validateBonus(bonus) {
    if (!bonus) {
      return;
    }
    if (this.isNotInRange(bonus)) {
      throw new Error(ERROR.NOT_IN_RANGE);
    }

    if (this.isNotOne(bonus)) {
      throw new Error(ERROR.NOT_ONE);
    }
    if (this.bonusIncludeDraw(this.#drawNumbers, bonus)) {
      throw new Error(ERROR.DUPLICATE_BONUS);
    }
    return bonus;
  }

  isNotInRange = (numbers) => {
    return numbers.some((number) => number < 1 || number > 45);
  };

  isNotSix = (numbers) => {
    return numbers.length !== 6;
  };

  isNotOne = (bonus) => {
    return bonus.length !== 1;
  };

  isDuplicate = (numbers) => {
    const set = new Set(numbers);
    return set.size !== numbers.length;
  };

  bonusIncludeDraw = (drew, bonus) => {
    return drew.includes(bonus[0]);
  };

  resultOfDraw(random, drew, bonus) {
    let result = this.matchCountCheck(random, drew);
    let isBonus = this.matchBonusCheck(random, bonus);

    if (result < 3) {
      return (this.rank = 0);
    }
    if (result === 3) {
      return (this.rank = 5);
    }
    if (result === 4) {
      return (this.rank = 4);
    }
    if (result === 5 && isBonus === false) {
      return (this.rank = 3);
    }
    if (result === 5 && isBonus === true) {
      return (this.rank = 2);
    }
    if (result === 6) {
      return (this.rank = 1);
    }
  }

  matchCountCheck = (random, drew) => {
    let maxCount = 0;
    random.forEach((rand) => {
      const count = drew.filter((d) => rand.includes(d)).length;
      maxCount = Math.max(maxCount, count);
    });

    return maxCount;
  };

  matchBonusCheck = (random, bonus) => {
    let isBonus = false;
    random.forEach((rand) => {
      const count = bonus.filter((b) => rand.includes(b)).length;
      if (count === 1) {
        isBonus = true;
      }
    });
    return isBonus;
  };

  lottoDrawResult(rank) {
    let profit = 0;
    if (rank === 0) {
      profit = 0;
      return profit;
    }
    if (rank === 5) {
      this.statCount[0] = 1;
      profit = 5000;
      return profit;
    }
    if (rank === 4) {
      this.statCount[1] = 1;
      profit = 50000;
      return profit;
    }
    if (rank === 3) {
      this.statCount[2] = 1;
      profit = 1500000;
      return profit;
    }
    if (rank === 2) {
      this.statCount[3] = 1;
      profit = 30000000;
      return profit;
    }
    if (rank === 1) {
      this.statCount[4] = 1;
      profit = 2000000000;
      return profit;
    }
  }

  lottoResultPrinter(count) {
    const statCount = this.statCount;
    Console.print(`${RESULT.START}`);
    Console.print(`${RESULT.RANK5}${statCount[0]}개`);
    Console.print(`${RESULT.RANK4}${statCount[1]}개`);
    Console.print(`${RESULT.RANK3}${statCount[2]}개`);
    Console.print(`${RESULT.RANK2}${statCount[3]}개`);
    Console.print(`${RESULT.RANK1}${statCount[4]}개`);
  }
}

export default Lotto;
