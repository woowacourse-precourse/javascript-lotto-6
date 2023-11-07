import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import LottoModel from "../models/LottoModel.js";

class LotteryController {
  lotteryTickets;
  winningNums;
  bonusNum;
  totalAmountInput;
  winningTickets;

  constructor() {
    this.totalPrize = 0;
    this.winningTickets = [];
    this.lottoModel = new LottoModel();
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async setup() {
    this.totalAmountInput = await this.inputView.getCostUserInput();
    const lotteryTicketsCount = this.totalAmountInput / 1000;
    this.lotteryTickets = this.lottoModel.setLotteryTickets(lotteryTicketsCount);
    this.outputView.printLotteryTickets(this.lotteryTickets);
    this.winningNums = await this.inputView.getWinningNumUserInput();
    [this.bonusNum] = await this.inputView.getBonusNumUserInput(); //<<-- 구조 분해 할당
  }

  async checkWinningLottery() {
    this.lottoModel.checkWinningNums(this.lotteryTickets, this.winningNums);
    this.winningTickets = this.lottoModel.checkBonusNum(this.bonusNum);
  }

  getTotalPrize() {
    this.totalPrize = this.lottoModel.getTotalPrize(this.winningTickets);
  }

  showResult() {
    const lottoROI = ((this.totalPrize / this.totalAmountInput) * 100).toFixed(1);
    this.outputView.printLotteryResult(this.winningTickets, lottoROI);
  }
}

export default LotteryController;
