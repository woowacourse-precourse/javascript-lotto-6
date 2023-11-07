import { Random } from '@woowacourse/mission-utils';
import { INIT } from '../constants/messages.js';
import InputValidator from './InputValidator.js';
import Lotto from '../Lotto.js';

class LottoModel {
  constructor() {
    this.purchaseAmount = 0;
    this.purchasecount = 0;
    this.randomNumbers = [];
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

  generateRandomLottoNumbers() {
    this.randomNumbers = Array.from({ length: this.purchasecount }, () => {
      const lottoNumbers = this.generateLottoNumber();
      lottoNumbers.sort((a, b) => a - b);
      return new Lotto(lottoNumbers).getNumbers();
    });
  }
}
// const test = new LottoModel();

// console.log(test.setPurchaseAmount('5000'));
// console.log(test.randomNumbers);

export default LottoModel;
