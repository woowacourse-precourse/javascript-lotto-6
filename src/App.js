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
    let lottos = this.lottos;
    while (lottos.length < lottoQuantity) {
      const lottoNumber = lottoRandomNumber(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH);
      lottos.push(new Lotto(lottoNumber));
    }
    print(MESSAGE.PURCHASE_QUANTITY(lottoQuantity));
    lottos.forEach((lotto) => lotto.printLottos());
    this.winningNumber(lottos);
  }

  async winningNumber(lottos) {
    const inputWinningNumber = await winningNumberInput();
    this.createWinningNumber(lottos, inputWinningNumber);
  }

  async createWinningNumber(lottos, inputWinningNumber) {
    validateWinningInput(inputWinningNumber);
    const winningNumber = inputWinningNumber
      .split(",")
      .map((number) => Number(number));
    validateWinningNumber(winningNumber);
    this.bonusNumber(lottos, winningNumber);
  }

  async bonusNumber(lottos, winningNumber) {
    const inputBonusNumber = Number(await bonusNumberInput());
    this.createBonusNumber(inputBonusNumber, winningNumber);
    this.lottoMatch(lottos, winningNumber, inputBonusNumber);
  }

  async createBonusNumber(inputBonusNumber, winningNumber) {
    validateBonusNumberInput(inputBonusNumber, winningNumber);
  }

  async lottoMatch(lottos, winningNumber, inputBonusNumber) {
    let matchLottoCount = [];
    let matchLottoBonus = [];
    lottos.forEach((lotto) => {
      matchLottoCount.push(lotto.matchLotto(winningNumber));
      matchLottoBonus.push(lotto.matchLottoBonus(inputBonusNumber));
    });
    console.log(matchLottoCount);
    console.log(matchLottoBonus);
  }
}

export default App;
