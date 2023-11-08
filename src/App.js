const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  async play() {
    Console.print('구입 금액을 입력해 주세요.');
    const purchaseAmount = await this.inputPurchaseAmount();
    const lottoTickets = this.generateLottoTickets(purchaseAmount);

    Console.print(`${lottoTickets.length}개를 구매했습니다.`);
    lottoTickets.forEach(ticket => Console.print(ticket.join(', ')));

    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber();

    const winnings = this.calculateWinnings(lottoTickets, winningNumbers, bonusNumber);
    this.printResults(winnings);
  }

  async inputPurchaseAmount() {
    let purchaseAmount = 0;

    while (true) {
      try {
        purchaseAmount = parseInt(await Console.readLineAsync(), 10);

        if (purchaseAmount % 1000 !== 0) {
          throw new Error('[ERROR] 1,000원 단위로 입력해야 합니다.');
        }

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return purchaseAmount;
  }

  generateLottoTickets(purchaseAmount) {
    const numTickets = purchaseAmount / 1000;
    const lottoTickets = [];

    for (let i = 0; i < numTickets; i++) {
      const lottoTicket = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoTicket.sort((a, b) => a - b);
      lottoTickets.push(lottoTicket);
    }

    return lottoTickets;
  }

  async inputWinningNumbers() {
    let winningNumbers = [];

    while (true) {
      try {
        Console.print('당첨 번호를 입력해 주세요.');
        const input = await Console.readLineAsync();
        winningNumbers = input.split(',').map(Number);

        if (winningNumbers.length !== 6 || !winningNumbers.every(num => num >= 1 && num <= 45)) {
          throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자 6개여야 합니다.');
        }

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return winningNumbers;
  }

  async inputBonusNumber() {
    let bonusNumber = 0;

    while (true) {
      try {
        Console.print('보너스 번호를 입력해 주세요.');
        bonusNumber = parseInt(await Console.readLineAsync(), 10);

        if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
          throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
        }

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return bonusNumber;
  }

  calculateWinnings(lottoTickets, winningNumbers, bonusNumber) {
    // TODO: 당첨 로직 구현
  }

  printResults(winnings) {
    // TODO: 결과 출력 구현
  }
}

const app = new App();
app.play();
