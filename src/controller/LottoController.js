import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import ErrorMessage from '../constants/ErrorMessage.js';

class LottoController {
  #lottos;

  #winningNumbers;

  constructor() {
    this.#lottos = [];
  }

  async start() {
    await this.#getAndValidateInputs();
  }

  async #getAndValidateInputs() {
    const purchaseCost = await InputView.inputParchaseCost();
    this.validatePurchaseCost(purchaseCost);
    this.#lottos = await this.#createLottos(purchaseCost);
    this.#winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await InputView.inputBonusNumber();
    this.validateBonusNumber(bonusNumber);
  }

  async #getWinningNumbers() {
    const winningNumbers = await InputView.inputWinningNumbers();
    this.#winningNumbers = winningNumbers.split(' ').map(number => {
      const parseNumber = parseInt(number, 10);
      if (Number.isNaN(parseNumber)) {
        throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
      }
      if (parseNumber < 1 || parseNumber > 45) {
        throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
      }
      return parseNumber;
    });
    if (this.#winningNumbers.length > 6) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
    }
    return this.#winningNumbers;
  }

  validatePurchaseCost(cost) {
    const purchaseCost = parseInt(cost, 10);
    if (Number.isNaN(purchaseCost)) {
      throw new Error(ErrorMessage.INVALID_PURCHASE_COST);
    }
    if (purchaseCost < 0) {
      throw new Error(ErrorMessage.INVALID_PURCAHSE_COST_RANGE);
    }
    if (purchaseCost % 1000 !== 0) {
      throw new Error(ErrorMessage.INVALID_PURCHASE_COST_UNIT);
    }
  }

  validateBonusNumber(bonusNumber) {
    const parseBonusNumber = parseInt(bonusNumber, 10);
    if (Number.isNaN(parseBonusNumber)) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
    }
    if (parseBonusNumber < 1 || parseBonusNumber > 45) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
    }
  }

  async #createLottos(purchaseCost) {
    const lottosToPurchase = Math.floor(purchaseCost / 1000);
    for (let i = 0; i < lottosToPurchase; i += 1) {
      const lotto = await MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
      const sortedLotto = lotto.sort((a, b) => a - b);
      this.#lottos.push(sortedLotto);
    }
    return this.#lottos;
  }
}

export default LottoController;