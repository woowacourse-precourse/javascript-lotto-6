import { Random, Console } from "@woowacourse/mission-utils";

class Lotto {
  #drawNumbers;

  constructor(numbers) {
    this.#validateDraw(numbers);
    this.#validateBonus(numbers);
    this.#drawNumbers = numbers;
    this.rank = 0;
    this.statCount = [0, 0, 0, 0, 0];
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
    return lottoNumbers;
  }
  //key = index, value = 숫자
  printLottoNumbers(lottoNumbers) {
    for (let i = 0; i < lottoNumbers.length; i++) {
      Console.print(lottoNumbers[i]);
    }
  }

  async enterDrawNumbers(num) {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const number = input.split(",");
    return this.#validateDraw(number).map(Number);
  }

  async enterBonusNumber(num) {
    const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    const number = input.split(",");
    return this.#validateBonus(number).map(Number);
  }

  #validateDraw(numbers) {
    if (!numbers) {
      return;
    }
    if (this.isNotSix(numbers)) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (this.isDuplicate(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    return numbers;
  }

  #validateBonus(bonus) {
    if (!bonus) {
      return;
    }
    if (this.isNotOne(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
    }
    return bonus;
  }

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

  resultOfLotto(random, drew, bonus) {
    let result = this.matchCountCheck(random, drew);
    let isBonus = this.matchBonusCheck(random, bonus);
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
    return (this.rank = 0);
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
    let statCount = this.statCount;
    if (rank === 5) {
      statCount[0] = 1;

      return;
    }
    if (rank === 4) {
      statCount[1] = 1;

      return;
    }
    if (rank === 3) {
      statCount[2] = 1;

      return;
    }
    if (rank === 2) {
      statCount[3] = 1;

      return;
    }
    if (rank === 1) {
      statCount[4] = 1;

      return;
    }

    return statCount;
  }

  lottoDrawProfit(count) {
    const statCount = this.statCount;
    Console.print(
      `\n당첨 통계\n---\n3개 일치 (5000원) - ${statCount[0]}개\n4개 일치 (50,000원) - ${statCount[1]}개\n5개 일치 (1,500,000원) - ${statCount[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${statCount[3]}개\n6개 일치 (2,000,000,000원) - ${statCount[4]}개\n`
    );
  }
}

export default Lotto;
