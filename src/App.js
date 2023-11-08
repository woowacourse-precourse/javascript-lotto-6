import Lotto from "./Lotto.js";
import { LOTTO, MESSAGE } from "./common/constants.js";
import { lottoRandomNumber, lottoSort, print } from "./common/utils.js";
import {
  validateBonusNumberInput,
  validatePurchaseInput,
  validateWinningInput,
  validateWinningNumber,
} from "./common/validation.js";
import {
  bonusNumberInput,
  purchaseAmountInput,
  winningNumberInput,
} from "./view/inputView.js";

class App {
  constructor() {
    this.lottos = [];
  }

  async play() {
    this.startLotto();
  }

  async startLotto() {
    const inputPurchaseAmount = await purchaseAmountInput();
    this.purchaseQuantity(inputPurchaseAmount);
  }

  async purchaseQuantity(inputPurchaseAmount) {
    this.validateInput(inputPurchaseAmount);
    const lottoQuantity = inputPurchaseAmount / LOTTO.PRICE;
    this.createLotto(lottoQuantity);
  }

  async validateInput(inputPurchaseAmount) {
    validatePurchaseInput(inputPurchaseAmount);
  }

  async createLotto(lottoQuantity) {
    while (this.lottos.length < lottoQuantity) {
      const lottoNumber = lottoRandomNumber(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH);
      this.lottos.push(new Lotto(lottoNumber));
    }
    print(MESSAGE.PURCHASE_QUANTITY(lottoQuantity));
    this.lottos.forEach((lotto) => lotto.printLottos());
    this.winningNumber();
  }

  async winningNumber() {
    const inputWinningNumber = await winningNumberInput();
    this.createWinningNumber(inputWinningNumber);
  }
  async createWinningNumber(inputWinningNumber) {
    validateWinningInput(inputWinningNumber);
    const winningNumber = inputWinningNumber
      .split(",")
      .map((number) => Number(number));
    validateWinningNumber(winningNumber);
    this.bonusNumber(winningNumber);
  }

  async bonusNumber(winningNumber) {
    const inputBonusNumber = Number(await bonusNumberInput());
    this.createBonusNumber(inputBonusNumber, winningNumber);
  }

  async createBonusNumber(inputBonusNumber, winningNumber) {
    validateBonusNumberInput(inputBonusNumber, winningNumber);
  }
}

export default App;
