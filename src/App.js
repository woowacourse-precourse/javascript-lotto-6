import Lotto from './Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  static LOTTO_LENGTH = 6;

  static ERROR_MESSAGES = {
    INVALID_MONEY: '[ERROR] 구입 금액은 1000원 단위의 숫자여야 합니다.',
    INVALID_LOTTO_NUMBERS: '[ERROR] 로또 번호는 1부터 45 사이의 중복되지 않는 6자리 숫자여야 합니다.',
    INVALID_BONUS_NUMBER: '[ERROR] 보너스 번호는 1부터 45 사이의 당첨 번호와 중복되지 않은 숫자여야 합니다.',
  };
  
  static PRIZE_MONEY = {
    first: 2000000000,
    second: 30000000,
    third: 1500000,
    fourth: 50000,
    fifth: 5000,
  };

  async play() {
    const userMoney = await this.getUserMoney();
    const lottos = this.createLottos(userMoney);
    this.printLottos(lottos);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const results = this.winningLotto(lottos, winningNumbers, bonusNumber);

    const profitRate = this.calculateProfit(userMoney, results);
    const formattedProfit = this.formatProfit(profitRate);
    this.printResults(results, formattedProfit);
  }

  async getUserMoney() {
    const promptMsg = '구입금액을 입력해 주세요.\n';
    return this.getValidatedInput(promptMsg, this.validateMoney);
  }

  async getWinningNumbers() {
    const promptMsg = '\n당첨 번호를 입력해 주세요.\n';
    return this.getValidatedInput(promptMsg, this.validateLottoNumbers);
  }

  async getBonusNumber(winningNumbers) {
    const promptMsg = '\n보너스 번호를 입력해 주세요.\n';
    return this.getValidatedInput(
      promptMsg,
      this.validateBonusNumber,
      winningNumbers
    );
  }

  async getUserInput(msg) {
    return MissionUtils.Console.readLineAsync(msg);
  }

  printLottos(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) =>
      MissionUtils.Console.print('[' + lotto.getNumbers().join(', ') + ']')
    );
  }

  printResults(results, formattedProfit) {
    MissionUtils.Console.print('\n당첨통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${results.fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${results.fourth}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${results.third}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${results.first}개`);
    MissionUtils.Console.print(`총 수익률은 ${formattedProfit}입니다.`);
  }

  winningLotto(lottos, winningNumbers, bonusNumber) {
    const results = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const matchCount = lottoNumbers.filter((number) =>
        winningNumbers.includes(number)
      ).length;
      const hasBonusNumber = lottoNumbers.includes(bonusNumber);

      switch (matchCount) {
        case 6:
          results.first += 1;
          break;
        case 5:
          results[hasBonusNumber ? 'second' : 'third'] += 1;
          break;
        case 4:
          results.fourth += 1;
          break;
        case 3:
          results.fifth += 1;
          break;
      }
    });

    return results;
  }

  async getValidatedInput(promptMsg, validateFn, winningNumbers) {
    let firstAttempt = true;

    while (true) {
      try {
        const userInput = await this.getUserInput(firstAttempt ? promptMsg : '');
        firstAttempt = false;

        return validateFn(userInput, winningNumbers);
      } catch (error) {
        MissionUtils.Console.print(`${error.message}`);
      }
    }
  }

  validateMoney(userInput) {
    let userMoney = parseInt(userInput, 10);

    if (isNaN(userMoney) || userMoney % 1000 !== 0) {
      throw new Error(App.ERROR_MESSAGES.INVALID_MONEY);
    }

    return userMoney;
  }

  validateLottoNumbers(userInput) {
    const numbers = userInput.split(",").map(numStr => {
      const num = parseInt(numStr.trim(), 10);
      if (isNaN(num) || num < 1 || num > 45) {
        throw new Error(App.ERROR_MESSAGES.INVALID_LOTTO_NUMBERS);
      }
      return num;
    });
  
    const isUnique = numbers.length === new Set(numbers).size;
    if (numbers.length !== App.LOTTO_LENGTH || !isUnique) {
      throw new Error(App.ERROR_MESSAGES.INVALID_LOTTO_NUMBERS);
    }
  
    return numbers;
  }
  

  validateBonusNumber(userInput, winningNumbers) {
    const bonusNumber = parseInt(userInput, 10);

    if (
      isNaN(bonusNumber) ||
      bonusNumber <= 0 ||
      bonusNumber > 45 ||
      winningNumbers.includes(bonusNumber)
    ) {
      throw new Error(App.ERROR_MESSAGES.INVALID_BONUS_NUMBER);
    }

    return bonusNumber;
  }

  createLottos(money) {
    const numberOfLottos = money / 1000;
    let lottos = [];

    for (let i = 0; i < numberOfLottos; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      lottos.push(new Lotto(numbers));
    }

    return lottos;
  }

  calculateProfit(userMoney, results) {
    let totalPrize = 0;
    for (const rank in results) {
      totalPrize += results[rank] * App.PRIZE_MONEY[rank];
    }

    return (totalPrize / userMoney) * 100;
  }

  formatProfit(profitRate) {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(profitRate / 100);
  }
}

export default App;
