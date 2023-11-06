import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {

    const purchaseAmount = await this.inputPurchaseAmout();
    const lottoTickets = this.getLottoTickets(purchaseAmount);

    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber();

    const result = this.calculateResults(lottoTickets, winningNumbers, bonusNumber);
    this.printResults(result);

  }

  async inputPurchaseAmout(){
    let purchaseAmount;
    while (1) {
      try {
        purchaseAmount = parseInt( await Console.readLineAsync("구입금액을 입력해 주세요.\n"));
        if (this.isInvalidPurchaseAmount(purchaseAmount)) {
          throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return purchaseAmount;
  }

  isInvalidPurchaseAmount(purchaseAmount) {
    return purchaseAmount % 1000 !== 0 || isNaN(purchaseAmount);
  }


  getLottoTickets(purchaseAmount){
    const numberOfLottoTickets = Math.floor(purchaseAmount / 1000);
    Console.print(`${numberOfLottoTickets}개를 구매했습니다.`);

    const lottoTickets = this.generateLottoTickets(numberOfLottoTickets);
    lottoTickets.forEach((ticket, index) => {
      Console.print('['+ticket.getNumbers().sort((a, b) => a - b).join(', ')+']');
    });

    return lottoTickets;
  }

  generateLottoTickets(count) {
    const lottoTickets = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lottoTicket = new Lotto(numbers);
      lottoTickets.push(lottoTicket);
    }
    return lottoTickets;
  }


  async inputWinningNumbers() {
    let winningNumbers;
    let winningNumbersMap;
    while (true) {
      winningNumbers = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n")
      winningNumbersMap = winningNumbers.split(',').map(Number);
      this.validateWinningNumbers(winningNumbersMap);
      break;
    }
    return winningNumbersMap;
  }

  async validateWinningNumbers(winningNumbersMap){
    try {
      if (!this.validateNumbers(winningNumbersMap)) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
      if (winningNumbersMap.length !== 6) {
        throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
      }
    } catch (error) {
      Console.print(error.message);
    }
  }

  async  inputBonusNumber() {
    let bonusNumber;
    while (true) {
      bonusNumber = parseInt(await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n"));
      this.validateBonusNumbers(bonusNumber);
      break;
    }
    return bonusNumber;
  }

  async validateBonusNumbers(bonusNumber){
    try {
      if (!this.validateNumber(bonusNumber)) {
        throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    } catch (error) {
      Console.print(error.message);
    }
  }

  validateNumbers(numbers) {
    return numbers.every(this.validateNumber);
  }
  
  validateNumber(number) {
    return number >= 1 && number <= 45;
  }

  calculateResults(lottoTickets, winningNumbers, bonusNumber) {
    const results = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      5.1: 0,
      6: 0,
    };

    for (const ticket of lottoTickets) {
      const numbers = ticket.getNumbers();
      const matchingNumbers = numbers.filter((number) => winningNumbers.includes(number));
      const matchingCount = matchingNumbers.length;

      if (matchingCount === 6) {
        results[6]++;
      } else if (matchingCount === 5 && numbers.includes(bonusNumber)) {
        results[5.1]++;
      } else {
        results[matchingCount]++;
      }
    }

    return results;
  }

  printResults(results) {
    Console.print("\n당첨 통계");
    Console.print("---");

    for (const key in results) {
      if (results.hasOwnProperty(key)) {
        const count = results[key];
        if(key === '5.1'){
          Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`);
        }
        else if (key>=3) {
          let prize = '';
          if (key === '3') prize = '5,000';
          else if (key === '4') prize = '50,000';
          else if (key === '5') prize = '1,500,000';
          else if (key === '5.1') prize = '30,000,000';
          else if (key === '6') prize = '2,000,000,000';

          Console.print(`${key}개 일치 (${prize}원) - ${count}개`);
        }
      }
    }

    const totalPrize = Object.keys(results).reduce((acc, key) => {
      let prize = 0;
      if (key === '3') prize = 5000;
      else if (key === '4') prize = 50000;
      else if (key === '5') prize = 1500000;
      else if (key === '5.1') prize = 30000000;
      else if (key === '6') prize = 2000000000;

      return acc + results[key] * prize;
    }, 0);
    const totalPurchaseAmount = Object.keys(results).reduce((acc, key) => acc + results[key], 0) * 1000;
    const profitRate = (totalPrize / totalPurchaseAmount) * 100;
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }
}

export default App;
