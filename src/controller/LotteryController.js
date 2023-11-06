import Lotto from "../models/Lotto.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class LotteryController {
  lotteryTickets;
  winningNums;
  bonusNum;
  totalAmountInput;

  constructor() {
    this.totalPrize = 0;
    this.lotto = null;
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async setup() {
    this.totalAmountInput = await this.inputView.getCostUserInput();
    const lotteryTicketsCount = this.totalAmountInput / 1000;
    this.outputView.printLotteryTicketsCount(lotteryTicketsCount);

    this.lotteryTickets = await this.outputView.printLotteryTickets(lotteryTicketsCount);
    this.winningNums = await this.inputView
      .getWinningNumUserInput()
      .then((res) => res.split(",").map(Number));

    this.lotto = new Lotto(this.winningNums);

    this.bonusNum = Number(await this.inputView.getBonusNumUserInput());
  }

  async drawLottoNumbers() {
    const results = [];

    for (let i = 0; i < this.lotteryTickets.length; i++) {
      const lotteryTicket = this.lotteryTickets[i];
      let isBonus = false;

      const winningNumsInTicket = lotteryTicket.filter((ele) => this.winningNums.includes(ele));

      if (winningNumsInTicket.length < 3) continue;

      if (winningNumsInTicket.length === 5) {
        isBonus = lotteryTicket.includes(this.bonusNum);
      }

      const prize = this.getLotteryPrize(winningNumsInTicket.length, isBonus);
      this.totalPrize += prize;

      results.push({ count: winningNumsInTicket.length, prize: prize });
      this.showResult(results);
    }
  }

  getLotteryPrize(winNumsCount, isBonus = false) {
    if (isBonus) return 30000000;
    if (winNumsCount === 3) return 5000;
    if (winNumsCount === 4) return 50000;
    if (winNumsCount === 5) return 1500000;
    if (winNumsCount === 6) return 2000000000;
    return 0;
  }

  showResult(results) {
    const lottoROI = ((this.totalPrize / this.totalAmountInput) * 100).toFixed(1);
    this.outputView.printLotteryResult(results, lottoROI);
  }
}

export default LotteryController;
