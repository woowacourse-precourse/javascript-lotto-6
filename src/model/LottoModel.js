import { Random } from '@woowacourse/mission-utils';
import { INIT } from '../constants/messages.js';
import InputValidator from './InputValidator.js';

class LottoModel {
  constructor() {
    this.purchaseAmount = 0;
    this.purchasecount = 0;
  }

  setPurchaseAmount(inputPrice) {
    InputValidator.ValidPurchaseAmount(inputPrice);
    this.purchaseAmount = parseInt(inputPrice, 10);
    this.purchasecount = this.purchaseAmount / INIT.priceUnit;
  }

  generateLottoNumber() {
    const { min, max, count } = INIT.validNumber;
    return Random.pickUniqueNumbersInRange(min, max, count);
  }
}
const test = new LottoModel();

console.log(test.setPurchaseAmount('5000'));
console.log(test.purchasecount);

export default LottoModel;
