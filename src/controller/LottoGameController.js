import Lotto from '../model/Lotto';
import WinningNumbers from '../model/WinningNumbers';
import InputView from '../view/InputView';
import LottoPurchase from '../model/LottoPurchase';
import BonusLottoNumber from '../model/BonusLottoNumber';
import LottoResult from '../model/LottoResult';
import ProfitRate from '../model/ProfitRate';
import OutputView from '../view/OutputView';

class LottoGameController {
  constructor() {
    this.purchaseAmount = 0;
    this.winningNumbers = [];
    this.userLottoNumbers = [];
    this.userBonuseNumber = 0;
    this.totalPrize = 0;
  }

  async start() {
    await this.initLottoInputs();
    this.totalPrize = LottoResult.getLottoResult(
      this.userLottoNumbers,
      this.userBonuseNumber,
      this.winningNumbers,
    );
    ProfitRate.calculateProfitRate(this.purchaseAmount, this.totalPrize);
  }

  async initLottoInputs() {
    this.purchaseAmount = await this.purchaseLotto();

    this.winningNumbers = WinningNumbers.getWinningLottoNumbers(
      this.purchaseAmount,
    );

    this.userLottoNumbers = await this.getUserLottoNumbers();

    this.userBonuseNumber = await this.getUserBonusNumber(
      this.userLottoNumbers,
    );
  }

  async purchaseLotto() {
    let purchaseAmount = await InputView.InputPurchaseAmount();
    try {
      LottoPurchase.validate(purchaseAmount);
    } catch (error) {
      OutputView.printErrorMessage(error);
      purchaseAmount = await this.purchaseLotto();
    }
    return purchaseAmount;
  }

  async getUserLottoNumbers() {
    let userLottoNumbers = await InputView.InputLottoNumbers();
    userLottoNumbers = userLottoNumbers.split(',');
    try {
      const lotto = new Lotto(userLottoNumbers);
      userLottoNumbers = lotto.getNumbers();
    } catch (error) {
      OutputView.printErrorMessage(error);
      userLottoNumbers = await this.getUserLottoNumbers();
    }
    return userLottoNumbers;
  }

  async getUserBonusNumber(userLottoNumbers) {
    let userBonusNumber = await InputView.InputBonusNumber();
    try {
      BonusLottoNumber.validate(userBonusNumber, userLottoNumbers);
    } catch (error) {
      OutputView.printErrorMessage(error);
      userBonusNumber = await this.getUserBonusNumber(userLottoNumbers);
    }
    return userBonusNumber;
  }
}

export default LottoGameController;
