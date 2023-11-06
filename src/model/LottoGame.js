import { LOTTO_MAGICNUMBER, LOTTO_PRICE } from '../constants/LottoOption.js';
import getRandomNumbersByAscending from '../utils/generateRandomNumber.js';
import { validateLottoSeedMoney } from '../validator/index.js';
import PlayerLotto from './PlayerLotto.js';

export default class LottoGame {
  #seedMoney;

  #lottoList;

  constructor(seedMoney) {
    validateLottoSeedMoney(seedMoney);
    this.#seedMoney = seedMoney;
    this.#buyLottoes();
  }

  #buyLottoes() {
    const amount = this.#seedMoney / LOTTO_PRICE;

    this.#lottoList = Array.from({ length: amount }, () => {
      const randomNumbers = getRandomNumbersByAscending(
        LOTTO_MAGICNUMBER.minValue,
        LOTTO_MAGICNUMBER.maxValue,
        LOTTO_MAGICNUMBER.selectAmount
      );

      return new PlayerLotto(randomNumbers);
    });
  }

  getLottoes() {
    return {
      lottoList: this.#lottoList,
      lottoAmount: this.#seedMoney / LOTTO_PRICE,
    };
  }
}
