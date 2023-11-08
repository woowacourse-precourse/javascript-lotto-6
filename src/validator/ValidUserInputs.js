import paramType from '../lib/paramType/src/paramType.js';
import PurchasePirceUserInputValidator from './PurchasePriceUserInputValidator.js';
import WinningNumbersUserInputValidator from './WinningNumbersUserInputValidator.js';
import BonusNumberUserInputValidator from './BonusNumberUserInputValidator.js';

export default class ValidUserInputs {
  #purchasePrice;
  #winningNumbers;
  #bonusNumber;

  addPurchasePrice(purchasePrice, _ = paramType(purchasePrice, 'string')) {
    new PurchasePirceUserInputValidator(purchasePrice);
    this.#purchasePrice = purchasePrice;
  }

  addWinningNumbers(winngingNumbers, _ = paramType(winngingNumbers, 'string')) {
    new WinningNumbersUserInputValidator(winngingNumbers);
    this.#winningNumbers = winngingNumbers;
  }

  addBonusNumber(bonusNumber, _ = paramType(bonusNumber, 'string')) {
    new BonusNumberUserInputValidator(bonusNumber, this.#winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  get purchasePrice() {
    return Number(this.#purchasePrice);
  }

  get winningNumbers() {
    return this.#winningNumbers.split(',').map((number) => Number(number));
  }

  get bonusNumber() {
    return Number(this.#bonusNumber);
  }
}
