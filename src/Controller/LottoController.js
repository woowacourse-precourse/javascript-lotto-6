import InputView from "../View/InputView.js";
import LottoMachine from "../Model/LottoMachine.js";
import { RANK_PRIZE } from "../utils/Constants.js";

class LottoController {
  constructor() {
    this.purchaseAmount = 0;
    this.inputView = new InputView();
    this.lottoMachine = new LottoMachine();
  }

  async handlePurchase() {
    this.purchaseAmount = await this.inputView.promptPurchaseAmount();
    const numberOfLottos = this.lottoMachine.calculateLottoCount(this.purchaseAmount);
    
    return numberOfLottos;
  }

  async handleLottoWinningNumbers() {
    const winningNumbers = await this.inputView.promptWinningNumbers();
    const bonusNumbers = await this.inputView.promptBonusNumber();

    return [winningNumbers, bonusNumbers];
  }

  convertPrizeToNumber(prize) {
    return parseInt(prize.replace(/[^0-9]/g, ''));
  }

  calculateTotalPrize(lottoResult) {
    return lottoResult.reduce((total, count, rank) => {
      if (rank === 0 || !RANK_PRIZE[rank]) return total;

      const prize = this.convertPrizeToNumber(RANK_PRIZE[rank]);
      return total + (prize * count);
    }, 0);
  }

  calculateProfitRates(lottoResult) {
    const totalPrize = this.calculateTotalPrize(lottoResult);
    return (totalPrize / this.purchaseAmount) * 100;
  }
}

export default LottoController;