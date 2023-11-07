import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      const lottoNumbers = await this.buyLottos(purchaseAmount);
      const winningNumbers = await this.getWinningNumbers();
      const bonusNumber = await this.getBonusNumber();

      this.calculatePrize(lottoNumbers, winningNumbers, bonusNumber);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.play(); // 에러가 발생한 경우 다시 play() 호출
    }
  }
  
  async getPurchaseAmount() {
    try {
      const amount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
      const isNumeric = /^[0-9]+$/.test(amount); // 숫자만 포함되어 있는지 검사
  
      if (!isNumeric) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
  
      const parsedAmount = parseInt(amount, 10);
  
      if (parsedAmount < 1000) {
        throw new Error('[ERROR] 구입 금액은 1000원 이상이어야 합니다.');
      }
  
      if (parsedAmount % 1000 !== 0) {
        throw new Error('[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.');
      }
  
      return parsedAmount;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.getPurchaseAmount(); // 에러가 발생한 경우 다시 getPurchaseAmount() 호출
    }
  }

  async buyLottos(purchaseAmount) {
    try {
      const lottoCount = Math.floor(purchaseAmount / 1000);
      const lottoNumbers = [];
      MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
      for (let i = 0; i < lottoCount; i++) {
        const lotto = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
        const numbers = lotto.getNumbers();
        const sortedNumbers = numbers.sort((a, b) => a - b);
        const formattedString = `[${sortedNumbers.join(', ')}]`;
        MissionUtils.Console.print(formattedString);
        lottoNumbers.push(numbers);
      }
  
      return lottoNumbers;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.buyLottos(purchaseAmount); // 에러가 발생한 경우 다시 buyLottos() 호출
    }
  }

  async getWinningNumbers() {
    try {
      const numbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.')
        .then(input => input.split(',').map(Number));

      if (numbers.length !== 6) {
        throw new Error('[ERROR] 6개의 숫자를 입력해야 합니다.');
      }
  
      for (const number of numbers) {
        if (isNaN(number) || number < 1 || number > 45) {
          throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
        }
      }
  
      return numbers;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.getWinningNumbers(); // 에러가 발생한 경우 다시 getWinningNumbers() 호출
    }
  }

  async getBonusNumber() {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요: ')
        .then(input => Number(input));
  
      if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }
  
      return bonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.getBonusNumber(); // 에러가 발생한 경우 다시 getBonusNumber() 호출
    }
  }

  calculatePrize(lottoNumbers, winningNumbers, bonusNumber) {
    try {
      const prizes = [0, 0, 0, 5000, 50000, 1500000, 30000000, 2000000000];
      const result = [0, 0, 0, 0, 0, 0, 0, 0];

      lottoNumbers.forEach(numbers => {
        let matchCount = 0;
        let bonusMatch = false;

        numbers.forEach(number => {
          if (winningNumbers.includes(number)) {
            matchCount++;
          }

          if (number === bonusNumber) {
            bonusMatch = true;
          }
        });

        if (matchCount === 6) {
          result[7]++;
        } else if (matchCount === 5 && bonusMatch) {
          result[6]++;
        } else {
          result[matchCount]++;
        }
      });

      const totalInvestment = lottoNumbers.length * 1000;  // 투자 금액

      if (totalInvestment === 0) {
        throw new Error('[ERROR] 투자 금액이 0원입니다.');
      }
      
      const totalPrize = result.reduce((acc, count, index) => acc + count * prizes[index], 0);  // 총 당첨 금액
      const totalProfit = totalPrize - totalInvestment;  // 총 수익 (투자 금액 - 당첨 금액)
      const totalProfitRate = (100 + ((totalProfit / totalInvestment) * 100)).toFixed(1);  // 수익률 계산
      
      MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[3]}개`);
      MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
      MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[5]}개`);
      MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[6]}개`);
      MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[7]}개`);
      MissionUtils.Console.print(`총 수익률은 ${totalProfitRate}%입니다.`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      this.play(); // 에러가 발생한 경우 다시 play() 호출
    }
  }
}

export default App;