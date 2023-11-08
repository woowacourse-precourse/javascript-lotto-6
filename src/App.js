const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  async play() {
    Console.print("구입 금액을 입력해 주세요.");
    const purchaseAmount = await this.inputPurchaseAmount();
    const lottoTickets = this.generateLottoTickets(purchaseAmount);

    Console.print(`${lottoTickets.length}개를 구매했습니다.`);
    lottoTickets.forEach((ticket) => Console.print(ticket.join(", ")));

    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber();

    const winnings = this.calculateWinnings(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );
    this.printResults(winnings, purchaseAmount);
  }

  async inputPurchaseAmount() {
    let purchaseAmount = 0;

    while (true) {
      try {
        purchaseAmount = parseInt(await Console.readLineAsync(), 10);

        if (purchaseAmount % 1000 !== 0) {
          throw new Error("[ERROR] 1,000원 단위로 입력해야 합니다.");
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
        Console.print("당첨 번호를 입력해 주세요.");
        const input = await Console.readLineAsync();
        winningNumbers = input.split(",").map(Number);

        if (
          winningNumbers.length !== 6 ||
          !winningNumbers.every((num) => num >= 1 && num <= 45)
        ) {
          throw new Error(
            "[ERROR] 로또 번호는 1부터 45 사이의 숫자 6개여야 합니다."
          );
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
        Console.print("보너스 번호를 입력해 주세요.");
        bonusNumber = parseInt(await Console.readLineAsync(), 10);

        if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
          throw new Error(
            "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다."
          );
        }

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return bonusNumber;
  }

  calculateWinnings(lottoTickets, winningNumbers, bonusNumber) {
    const winnings = {
      1: 0, // 1등
      2: 0, // 2등
      3: 0, // 3등
      4: 0, // 4등
      5: 0, // 5등
    };

    lottoTickets.forEach((ticket) => {
      const matchingNumbers = this.countMatchingNumbers(ticket, winningNumbers);
      const isBonusNumberMatched = ticket.includes(bonusNumber);

      if (matchingNumbers === 6) {
        winnings[1] += 1; // 1등 당첨
      } else if (matchingNumbers === 5 && isBonusNumberMatched) {
        winnings[2] += 1; // 2등 당첨
      } else if (matchingNumbers === 5) {
        winnings[3] += 1; // 3등 당첨
      } else if (matchingNumbers === 4) {
        winnings[4] += 1; // 4등 당첨
      } else if (matchingNumbers === 3) {
        winnings[5] += 1; // 5등 당첨
      }
    });

    return winnings;
  }

  printResults(winnings, purchaseAmount) {
    Console.print("당첨 통계");
    Console.print("---");

    for (let rank = 1; rank <= 5; rank++) {
      const prize = this.getPrizeByRank(rank);
      const count = winnings[rank];
      const totalPrize = prize * count;

      Console.print(
        `${prize}개 일치 (${this.formatCurrency(prize)}원) - ${count}개`
      );
    }

    const totalPrize = this.calculateTotalPrize(winnings);
    const profitRate = ((totalPrize - purchaseAmount) / purchaseAmount) * 100;

    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  countMatchingNumbers(ticket, winningNumbers) {
    return ticket.filter((number) => winningNumbers.includes(number)).length;
  }

  getPrizeByRank(rank) {
    const prizeTable = {
      1: 2000000000, // 1등
      2: 30000000, // 2등
      3: 1500000, // 3등
      4: 50000, // 4등
      5: 5000, // 5등
    };

    return prizeTable[rank];
  }

  formatCurrency(amount) {
    return amount.toLocaleString("en-US");
  }

  calculateTotalPrize(winnings) {
    return Object.keys(winnings).reduce(
      (total, rank) => total + winnings[rank] * this.getPrizeByRank(rank),
      0
    );
  }
}

const app = new App();
app.play();
export default App;
