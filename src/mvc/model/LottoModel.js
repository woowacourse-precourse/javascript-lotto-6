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
  #purchasedLottoArray;
  #lottoBoard;

  constructor() {
    this.#lottoBoard = [];
    this.#lottoBoard = new Array(LOTTO_NUMBER_UPPER + 1).fill(MISS_STATE);
  }

  purchaseLottos(numberOfLotto) {
    this.#purchasedLottoArray = Get.randomLottoArray(numberOfLotto);
  }

  makeLottoBoard(winningNumbers, bonusNumber) {
    this.#lottoBoard = new Array(LOTTO_NUMBER_UPPER + 1).fill(MISS_STATE);
    winningNumbers.forEach(number => (this.#lottoBoard[number] = HIT_STATE));
    this.#lottoBoard[bonusNumber] = BONUS_STATE;
  }

  getPurchasedLottoArray() {
    return [...this.#purchasedLottoArray];
  }

  getBoard() {
    return this.#lottoBoard;
  }

  getLottoResult() {
    const result = new Array(NUMBER_OF_LOTTO_NUMBERS * HIT_STATE + 1).fill(0);
    this.#purchasedLottoArray.forEach(
      lotto => result[Get.lottoCheck(lotto, this.#lottoBoard)]++
    );

    return Object.freeze(result);
  }

  getNumberOfLottos() {
    return this.#purchasedLottoArray.length;
  }
}

export default LottoModel;
