import Utils from '../Utils';
import LottoGame from '../domain/LottoGame';
import UserOutputProvider from '../UI/UserOutputProvider';
import UserInputValidator from '../UI/UserInputValidator';

class LottoController {
  constructor() {
    this.lottoGame = null;
    this.UserInputValidator = new UserInputValidator();
    this.UserOutputProvider = new UserOutputProvider();
    this.winningStatus = null;
  }

  async buyAndGenerateLotto() {
    const PURCHASE_AMOUNT =
      await this.UserInputValidator.getPurchaseAmountFromUser();
    this.lottoGame = new LottoGame(PURCHASE_AMOUNT);
    const SORTED_LOTTO_NUMBERS = Utils.sortLottoNumbers(
      this.lottoGame.getLottoNumbers(),
    );
    this.UserOutputProvider.showPurchasedLottos(SORTED_LOTTO_NUMBERS);
  }

  async calculateWinningStatus() {
    const WINNING_NUMBER = await this.UserInputValidator.getWinningNumbers();
    const BONUS_NUMBER = await this.UserInputValidator.getBonusNumber();
    this.winningStatus = this.lottoGame.getWinningStatus(
      WINNING_NUMBER,
      BONUS_NUMBER,
    );
  }

  lottoResult() {
    const RATE_OF_RETURN = this.lottoGame.calculateRateOfReturn(
      this.winningStatus,
    );
    this.UserOutputProvider.showWinnigStatus(this.winningStatus);
    this.UserOutputProvider.showRateOfReturn(RATE_OF_RETURN);
  }

  async playGame() {
    await this.buyAndGenerateLotto();
    await this.calculateWinningStatus();
    this.lottoResult();
  }
}
export default LottoController;
