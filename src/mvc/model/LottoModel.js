import Get from './utils/Get.js';

class LottoModel {
  constructor() {
    this.purchasedLottoArray;
    this.lottoBoard;
    this.lottoResult;
  }

  setPurchasedLottoArray(numberOfLotto) {
    this.purchasedLottoArray = Get.randomLottoArray(numberOfLotto);
  }
}

export default LottoModel;
