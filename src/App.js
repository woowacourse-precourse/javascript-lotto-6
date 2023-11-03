import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const moneyInput = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      const money = Number(moneyInput);
      if (isNaN(money)) {
        throw new Error('[ERROR] 숫자만 입력 가능합니다.');
      }
      if (money <= 0) {
        throw new Error('[ERROR] 정수만 입력 가능합니다.');
      }
      if (money % 1000 !== 0) {
        throw new Error("[ERROR] 1장 당 1000원입니다.");
      }
      let lottos = money / 1000;
      Console.print(`\n${lottos}개를 구매했습니다.`);

      const randomNumbers = [];
      while (lottos > 0) {
        const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
        numbers.sort(function (a, b) {
          return a - b;
        });
        randomNumbers.push(numbers);
        Console.print(`[${numbers.join(', ')}]`);
        lottos--;
      }

      const lottonumberInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      const lottonumber = lottonumberInput.split(',').map(Number);
      if (lottonumber.length !== 6) {
        throw new Error('[ERROR] 6개의 숫자만 입력해주세요');
      }

      const duplicateCheck = new Set();
      for (const number of lottonumber) {
        if (duplicateCheck.has(number)) {
          throw new Error(`[ERROR] 중복된 번호 ${number}을 입력하셨습니다.`);
        }
        duplicateCheck.add(number);
      }

      const bonusNumberInput = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
      const bonumNumber = Number(bonusNumberInput);
      if (isNaN(bonumNumber)) {
        throw new Error('[ERROR] 숫자만 입력 가능합니다.');
      }
      if (lottonumber.includes(bonumNumber)) {
        throw new Error('[ERROR] 보너스 번호와 당첨 번호가 중복됩니다.');
      }
      if (bonumNumber < 1 || bonumNumber > 45) {
        throw new Error('[ERROR] 1부터 45까지의 숫자만 입력 가능합니다');
      }

      Console.print('\n당첨 통계');
      Console.print('---');

      // let bonus
      let matchNumber = 0;
      let matchThree = 0;
      let matchFour = 0;
      let matchFive = 0;
      let matchFiveBonus = 0;
      let matchsix = 0;
      for (const userNumbers of randomNumbers) {
        let userMatchCount = 0;
        let userMatchBonusCount = 0;
        for (const number of userNumbers) {
          if (lottonumber.includes(number)) {
            userMatchCount++;
          }
        }
        if (userMatchCount === 3) {
          matchThree++;
        }
        if (userMatchCount === 4) {
          matchFour++;
        }
        if (userMatchCount === 5 && userNumbers.includes(bonumNumber)) {
          matchFiveBonus++;
        }
        else if (userMatchCount === 5) {
          matchFive++;
        }
        if (userMatchCount === 6) {
          matchsix++;
        }
      }

      // const prizes = [5000, 50000, 1500000, 30000000, 2000000000];

      // const totalPrize = prizes[matchNumber];

      // const totalSpent = moneyInput;
      // const totalProfit = totalPrize - totalSpent;
      // const profitPercentage = (totalProfit / totalSpent) * 100;


      Console.print(`3개 일치 (5,000원) - ${matchThree}개`);
      Console.print(`4개 일치 (50,000원) - ${matchFour}개`);
      Console.print(`5개 일치 (1,500,000원) - ${matchFive}개`);
      Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchFiveBonus}개`);
      Console.print(`6개 일치 (2,000,000,000원) - ${matchsix}개`);

      const prize = (matchThree * 5000) + (matchFour * 50000) + (matchFive * 1500000) + (matchFiveBonus * 30000000) + (matchsix * 2000000000);
      const profitPercentage = (prize / moneyInput) * 100;

      Console.print(`총 수익률은 ${profitPercentage.toFixed(1)}%입니다.`);
    } catch (e) {
      Console.print(e.message);
      this.play();
    }
  }
}

export default App;
