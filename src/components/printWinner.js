import { MissionUtils } from "@woowacourse/mission-utils";

const WIN_PRIZES = {
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  50: 30000000,
};

export default class PrintWinner {
  constructor(
    randomLottoTickets,
    inputUserNumbers,
    inputUserBonus,
    totalWinning
  ) {
    this.randomLottoTickets = randomLottoTickets;
    this.inputUserNumbers = inputUserNumbers;
    this.inputUserBonus = inputUserBonus;
    this.winCount = {
      3: 0,
      4: 0,
      5: 0,
      50: 0,
      6: 0,
    };
    this.totalWinning = totalWinning;
  }

  //계산하는 함수 index를 늘려 계산 50은 보너스임
  calculateWinCount(randomLottoTickets, inputUserNumbers, inputUserBonus) {
    randomLottoTickets.map((ticket) => {
      let matchNumbers = ticket.filter((num) =>
        this.inputUserNumbers.includes(num)
      );
      if (matchNumbers.length === 5 && ticket.includes(inputUserBonus)) {
        this.winCount[50] += 1;
      } else {
        this.winCount[matchNumbers.length] += 1;
      }
    });
  }

  print() {
    //계산하는 함수
    this.calculateWinCount(
      this.randomLottoTickets,
      this.inputUserNumbers,
      this.inputUserBonus
    );

    this.totalWinning =
      this.winCount[3] * WIN_PRIZES[3] +
      this.winCount[4] * WIN_PRIZES[4] +
      this.winCount[5] * WIN_PRIZES[5] +
      this.winCount[50] * WIN_PRIZES[50] +
      this.winCount[6] * WIN_PRIZES[6];
    const totalInvestment = this.randomLottoTickets.length * 1000;

    MissionUtils.Console.print(`
    3개 일치 (5,000원) - ${this.winCount[3]}개
    4개 일치 (50,000원) - ${this.winCount[4]}개
    5개 일치 (1,500,000원) - ${this.winCount[5]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winCount[50]}개
    6개 일치 (2,000,000,000원) - ${this.winCount[6]}개
    `);

    const totalRate = (this.totalWinning / totalInvestment) * 100;
    const formattedTotalRate = totalRate < 0 ? 0 : totalRate.toFixed(2);

    MissionUtils.Console.print(
      `${this.totalWinning} 수익이며 총 수익률은 ${formattedTotalRate}%입니다.`
    );
  }
}
