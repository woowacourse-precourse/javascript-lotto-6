import Lotto from '../Lotto.js';
import generateRandomNumbers from '../utils/generateRandomNumber.js';

export default class LottoService {
  #seedMoney;

  #lottoList;

  constructor(seedMoney) {
    this.#seedMoney = seedMoney;
    this.#buyLottoes();
  }

  #buyLottoes() {
    const amount = this.#seedMoney / 1000;

    this.#lottoList = Array.from({ length: amount }, () => {
      const randomNumbers = generateRandomNumbers(1, 45, 6);
      return new Lotto(randomNumbers);
    });
  }

  getLottoes() {
    return Array.from(this.#lottoList, (lotto) => lotto.getLottoNumbers());
  }
}
