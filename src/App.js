import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
      const money = await this.validMoney();

      let lottos = money / 1000;
      Console.print(`\n${lottos}개를 구매했습니다.`);

      const randomNumbers = this.setRandomNumber(lottos);
      const lottonumber = await this.getLottoNumber('당첨 번호를 입력해 주세요.\n', 6);
      const bonumNumber = await this.getBonusNumber(lottonumber);

      Console.print('\n당첨 통계');
      Console.print('---');

      const [matchThree, matchFour, matchFive, matchFiveBonus, matchSix] = this.matchNumber(randomNumbers, lottonumber, bonumNumber);

      this.printPercentage(matchThree, matchFour, matchFive, matchFiveBonus, matchSix, money);
  }

  async validMoney() {
    return this.retryValid('구입금액을 입력해 주세요.\n', (input) => {
      const money = Number(input);
      if (isNaN(money)) {
        throw new Error('[ERROR] 숫자만 입력 가능합니다.');
      }
      if (money <= 0) {
        throw new Error('[ERROR] 정수만 입력 가능합니다.');
      }
      if (money % 1000 !== 0) {
        throw new Error("[ERROR] 1장 당 1000원입니다.");
      }
      return money;
    });
  }

  async retryValid(prompt, validator) {
    while (true) {
      try {
        const input = await Console.readLineAsync(prompt);
        return validator(input);
      }catch (e) {
        Console.print(e.message);
      }
    }
  }

  setRandomNumber(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      if (!randomNumbers.includes(numbers)) {
        numbers.sort((a, b) => a - b);
        randomNumbers.push(numbers);
      }
      Console.print(`[${numbers.join(', ')}]\n`);
    }
    return randomNumbers;
  }

  async getLottoNumber(prompt, expectedCount) {
    return this.retryValid(prompt, (input) => {
      const lottonumber = input.split(',').map(Number);
      if (lottonumber < 1 || lottonumber > 45) {
        throw new Error('[ERROR] 1 ~ 45까지의 숫자만 입력 가능합니다.');
      }
      if (lottonumber.length !== 6) {
        throw new Error('[ERROR] 6개의 숫자만 입력해주세요');
      }
      if (new Set(lottonumber).size !== expectedCount) {
        throw new Error('[ERROR] 중복된 번호를 입력하셨습니다.');
      }
      return lottonumber;
    });
  }

  async getBonusNumber(lottonumber) {
    return this.retryValid('\n보너스 번호를 입력해주세요.\n', (input) => {
      const bonusNumber = Number(input);
      if (isNaN(bonusNumber)) {
        throw new Error('[ERROR] 숫자만 입력 가능합니다.');
      }
      if (lottonumber.includes(bonusNumber)) {
        throw new Error('[ERROR] 보너스 번호와 당첨 번호가 중복됩니다.');
      }
      if (bonusNumber < 1 || bonusNumber > 45) {
        throw new Error('[ERROR] 1부터 45까지의 숫자만 입력 가능합니다');
      }
      return bonusNumber;
    });
  }

  matchNumber(randomNumbers, lottonumber, bonumNumber) {
    const matches = new Array(5).fill(0);

    randomNumbers.forEach(userNumbers => {
      const userMatchCount = userNumbers.filter(num => lottonumber.includes(num)).length;
      if (userMatchCount === 3) {
        matches[0]++;
      }
      if (userMatchCount === 4) {
        matches[1]++;
      }
      if (userMatchCount === 5) {
        if (userNumbers.includes(bonumNumber)) {
          matches[3];
        }
        else {
          matches[2];
        }
      }
      if (userMatchCount === 6) {
        matches[5]++;
      }
    });
    return matches;
  }

  printPercentage(matchThree, matchFour, matchFive, matchFiveBonus, matchSix, money) {
    const prizes = [5000, 50000, 1500000, 30000000, 2000000000];
    const totalPrize = matchThree * prizes[0] + matchFour * prizes[1] + matchFive * prizes[2] + matchFiveBonus * prizes[3] + matchSix * prizes[4];

    Console.print(`3개 일치 (5,000원) - ${matchThree}개`);
    Console.print(`4개 일치 (50,000원) - ${matchFour}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchFive}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchFiveBonus}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${matchSix}개`);
    const profitPercentage = (totalPrize / money) * 100;
    Console.print(`총 수익률은 ${profitPercentage.toFixed(1)}%입니다.`);
  }

}

export default App;