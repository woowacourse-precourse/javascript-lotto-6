import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from "../src/Lotto.js";

class App {
  async play() {
    const amount = await this.getAmount();
    const lottoNumbersArray = this.getLottoNumbers(amount);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const intBonusNumber = parseInt(bonusNumber, 10);
    
    const result = this.getResult(winningNumbers, lottoNumbersArray, intBonusNumber, amount);

    const profitRate = this.getProfitRate(amount, result);
    this.printResult(result, profitRate);
  }

  async getAmount() {
    try {
      const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      this.validateAmount(amount);

      return amount;
    } catch (error) {
      Console.print(error.message);

      return this.getAmount();
    }
  }

  validateAmount(amount) {
    if (amount < 1000 || amount % 1000 !== 0) {
      throw new Error('[ERROR] 입력 값이 잘못 되었습니다.');
    }
  }

  getLottoNumbers(count) {
    const playCount = count / 1000;
    const allLottoTickets = Array.from({length: playCount}, () => this.generateRandomLottoNumbers());
    const lottoInfo = allLottoTickets.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    Console.print(`${playCount}개를 구매했습니다.`);
    Console.print(lottoInfo);

    return allLottoTickets;
  }

  generateRandomLottoNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedNumbers = randomNumbers.sort((a, b) => a - b);
    return sortedNumbers;
  }

  async getWinningNumbers() {
    try {
      const inputString = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
      const numbers = inputString.split(',').map(Number);

      return new Lotto(numbers);
    } catch (error) {
      Console.print(error.message);

      return this.getWinningNumbers();
    }
  }

  async getBonusNumber(numbers) {
    try {
      const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
      this.validateBonusNumber(numbers, bonusNumber);

      return bonusNumber;
    } catch (error) {
      Console.print(error.message);

      return this.getBonusNumber(numbers);
    }
  }

  validateBonusNumber(lottoNumbers, bonusNumber) {
    const parsedBonusNumber = Number.parseFloat(bonusNumber);

    if (isNaN(bonusNumber) || parsedBonusNumber < 1 || parsedBonusNumber > 45 || !Number.isInteger(parsedBonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 한개의 정수여야 합니다.');
    }
    if (lottoNumbers.isBonusNumberDuplicate(parsedBonusNumber)) {
      throw new Error('[ERROR] 중복된 값이 있습니다.');
    }
  }

  getResult(numbers, lottoNumbersArray, intBonusNumber) {
    const initialResults = {
      zero: 0,
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      all: 0,
    };
  
    const results = lottoNumbersArray.map((lottoNumbers) => numbers.matchLotto(lottoNumbers, intBonusNumber))
      .reduce((acc, matchResult) => this.accumulateResult(acc, matchResult), { ...initialResults })
  
    return results;
  }

  accumulateResult(acc, matchResult) {
    acc[matchResult]++;

    return acc;
  }

  printResult(results, profitRate) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${results.three}개`);
    Console.print(`4개 일치 (50,000원) - ${results.four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.five}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.bonus}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results.all}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  getProfitRate(amount, results) {
    const prizePerResult = {
      zero: 0,
      three: 5000,
      four: 50000,
      five: 1500000,
      bonus: 30000000,
      all: 2000000000,
    };
    Console.print(results);
    const totalPrize = Object.keys(results).reduce((sum, key) => {
      return sum + results[key] * prizePerResult[key];
    }, 0);
    const profitRate = (totalPrize / amount) * 100;
  
    return profitRate.toFixed(1);
  }
}

export default App;
