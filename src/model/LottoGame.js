import Lotto from '../Lotto.js';
import { LOTTO_MAGICNUMBER, LOTTO_PRICE } from '../constants/LottoOption.js';
import getRandomNumbersByAscending from '../utils/generateRandomNumber.js';

export default class LottoGame {
  #seedMoney;

  #lottoList;

  constructor(seedMoney) {
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

      return new Lotto(randomNumbers);
    });
  }

  getLottoes() {
    return {
      lottoList: this.#lottoList,
      lottoAmount: this.#seedMoney / LOTTO_PRICE,
    };
  }
}
