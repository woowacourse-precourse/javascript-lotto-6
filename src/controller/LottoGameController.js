// import BonusLottoNumber from '../BonusLottoNumber';
import Lotto from '../model/Lotto.js';
import WinningNumbers from '../model/WinningNumbers.js';
import InputView from '../view/InputView.js';
import LottoPurchase from '../model/LottoPurchase.js';
import { printMessage } from '../utils/printMessage.js';
import MESSAGES from '../constants/messages.js';
import BonusLottoNumber from '../model/BonusLottoNumber.js';
import WinningResult from '../model/WinningResult.js';

class LottoGameController {
  constructor() {
    this.purchaseAmount = 0;
    this.winningNumbers = [];
    this.userLottoNumbers = [];
    this.userBonuseNumber = 0;
  }

  async start() {
    this.purchaseAmount = await this.purchaseLotto();
    this.winningNumbers = WinningNumbers.getWinningLottoNumbers(
      this.purchaseAmount,
    );
    this.userLottoNumbers = await this.getUserLottoNumbers();
    this.userBonuseNumber = await this.getUserBonusNumber(
      this.userLottoNumbers,
    );
    this.getLottoWinninnResult(
      this.purchaseAmount,
      this.userLottoNumbers,
      this.userBonuseNumber,
      this.winningNumbers,
    );
  }

  async purchaseLotto() {
    let purchaseAmount = await InputView.InputPurchaseAmount();
    try {
      LottoPurchase.validate(purchaseAmount);
    } catch (error) {
      printMessage(`${error.name}${error.message}`);
      purchaseAmount = await this.purchaseLotto();
    }
    return purchaseAmount;
  }

  async getUserLottoNumbers() {
    let userLottoNumbers = await InputView.InputLottoNumbers();
    userLottoNumbers = userLottoNumbers.split(',');
    try {
      Lotto.validate(userLottoNumbers);
    } catch (error) {
      printMessage(`${error.name}${error.message}`);
      userLottoNumbers = await this.getUserLottoNumbers();
    }
    return userLottoNumbers;
  }

  async getUserBonusNumber(userLottoNumbers) {
    let userBonusNumber = await InputView.InputBonusNumber();
    try {
      BonusLottoNumber.validate(userBonusNumber, userLottoNumbers);
    } catch (error) {
      printMessage(`${error.name}${error.message}`);
      userBonusNumber = await this.getUserBonusNumber(userLottoNumbers);
    }
    return userBonusNumber;
  }

  getLottoWinninnResult(
    purchaseAmount,
    userLottoNumbers,
    userBonusNumber,
    winningNumbers,
  ) {
    const result = new WinningResult(
      purchaseAmount,
      userLottoNumbers,
      userBonusNumber,
      winningNumbers,
    );
  }
}

export default LottoGameController;
