import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from "../src/Lotto.js";

class App {
  async play() {
    const amount = await this.getAmount();
    const lottoNumbersArray = this.getLottoNumbers(amount);

    const numbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();
    this.validateBonusNumber(numbers, bonusNumber);
  
    const results = {
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      all: 0,
    };
    
    for (const lottoNumbers of lottoNumbersArray) {
      const matchResult = numbers.matchLotto(lottoNumbers, bonusNumber);
      
      results.three += matchResult.three;
      results.four += matchResult.four;
      results.five += matchResult.five;
      results.bonus += matchResult.bonus;
      results.all += matchResult.all;
    }
    
    numbers.printResult(results);

    const profitRate = this.getProfitRate(amount, results);
    Console.print(`총 수익률은 ${profitRate}입니다.`);
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
    const allLottoTickets = [];
  
    Console.print(`${playCount}개를 구매했습니다.`);
    for (let i = 0; i < playCount; i++) {
      const randomLottoTicket = this.printRandomLottoNumbers();
      allLottoTickets.push(randomLottoTicket);
      Console.print(`[${randomLottoTicket.join(', ')}]`);
    }
  
    return allLottoTickets;
  }

  printRandomLottoNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
  }

  async getWinningNumbers() {
    const inputString = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const numbers = inputString.split(',').map(Number);
    return new Lotto(numbers);
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    return bonusNumber;
  }

  validateBonusNumber(lottoNumbers, bonusNumber) {
    const parsedBonusNumber = Number.parseFloat(bonusNumber);

    if (isNaN(parsedBonusNumber) || parsedBonusNumber < 1 || parsedBonusNumber > 45 || !Number.isInteger(parsedBonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 한개의 정수여야 합니다.');
    }
    if (lottoNumbers.isBonusNumberDuplicate(parsedBonusNumber)) {
      throw new Error('[ERROR] 중복된 값이 있습니다.');
    }
  }

  getProfitRate(amount, results) {
    const prizePerResult = {
      three: 5000,
      four: 50000,
      five: 1500000,
      bonus: 30000000,
      all: 2000000000,
    };
    const totalPrize = Object.keys(results).reduce((sum, key) => {
      return sum + results[key] * prizePerResult[key];
    }, 0);
    const profitRate = (totalPrize / amount) * 100;
    const roundedProfitRate = profitRate.toFixed(2).replace(/\.?0+$/, '');
  
    return `${roundedProfitRate}%`;
  }
}

export default App;
