import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    let purchaseAmount;
    while (1) {
      try {
        purchaseAmount = parseInt( await Console.readLineAsync("구입금액을 입력해 주세요.\n"));
        if (purchaseAmount % 1000 !== 0 || isNaN(purchaseAmount)) {
          throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    const numberOfLottoTickets = Math.floor(purchaseAmount / 1000);
    const lottoTickets = this.generateLottoTickets(numberOfLottoTickets);

    Console.print(`${numberOfLottoTickets}개를 구매했습니다.`);

    lottoTickets.forEach((ticket, index) => {
      Console.print(ticket.getNumbers().sort((a, b) => a - b));
    });

    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber();

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
      try {
        winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n")
        winningNumbersMap = winningNumbers.split(',').map(Number);
        if (!this.validateNumbers(winningNumbersMap)) {
          throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
        if (winningNumbersMap.length !== 6) {
          throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winningNumbersMap;
  }

  async  inputBonusNumber() {
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = parseInt(await Console.readLineAsync("보너스 번호를 입력해 주세요.\n"));
        if (!this.validateNumber(bonusNumber)) {
          throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return bonusNumber;
  }
  validateNumbers(numbers) {
    return numbers.every(this.validateNumber);
  }
  
  validateNumber(number) {
    return number >= 1 && number <= 45;
  }
}

export default App;
