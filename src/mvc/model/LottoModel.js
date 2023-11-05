import Get from './utils/Get.js';

import CONSTANTS from '../../constants/CONSTANTS.js';

const {
  LOTTO_NUMBER_UPPER,
  NUMBER_OF_LOTTO_NUMBERS,
  MISS_STATE,
  BONUS_STATE,
  HIT_STATE,
} = CONSTANTS;

class LottoModel {
  constructor() {
    this.purchasedLottoArray;
    this.lottoBoard;
    this.lottoResult;
  }

  purchaseLottos(numberOfLotto) {
    this.purchasedLottoArray = Get.randomLottoArray(numberOfLotto);
  }

  makeLottoBoard(winningNumbers, bonusNumber) {
    this.lottoBoard = new Array(LOTTO_NUMBER_UPPER + 1).fill(MISS_STATE);
    winningNumbers.forEach(number => (this.lottoBoard[number] = HIT_STATE));
    this.lottoBoard[bonusNumber] = BONUS_STATE;
  }

  updateLottoResult() {
    this.lottoResult = new Array(NUMBER_OF_LOTTO_NUMBERS * HIT_STATE + 1).fill(
      0
    );
    lottoArray.forEach(
      lotto => this.lottoResult[Get.lottoCheck(lotto, this.lottoBoard)]++
    );
  }
}

export default LottoModel;
