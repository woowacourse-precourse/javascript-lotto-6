import Lotto from '../Lotto.js';
import { LOTTO_NUMBER_RANGE, LOTTO_NUMBER_SIZE, LOTTO_PRICE } from '../constants/GameSetting.js';
import { getRandomNumberSort } from '../utils/RandomNumber.js';

export default class MakeLottoService {
  #buyLottoMoney;
  #lottoCount;
  #createdLottoNumbers;

  constructor(buyLottoMoney) {
    this.#buyLottoMoney = buyLottoMoney;
    this.#buyLotto();
  }

  #buyLotto() {
    this.#lottoCount = this.#buyLottoMoney / LOTTO_PRICE;

    this.#createdLottoNumbers = Array.from({ length: this.#lottoCount }, () => {
      const randomNumbers = getRandomNumberSort(
        LOTTO_NUMBER_RANGE.start,
        LOTTO_NUMBER_RANGE.end,
        LOTTO_NUMBER_SIZE,
      );
      return new Lotto(randomNumbers);
    });
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  getLottoNumbers() {
    return Array.from(this.#createdLottoNumbers, (lotto) => lotto.getNumbers());
  }
}
