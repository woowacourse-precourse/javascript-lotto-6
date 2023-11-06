import Lotto from '../Lotto.js';
import { LOTTO_PRICE } from '../constants/GameSetting.js';
import { getRandomNumber } from '../utils/RandomNumber.js';
import { inputBuyAmount, printBuyLotto, printLottoArray } from '../view/View.js';

export default class LottoGameController {
  #buyLottoAmount;
  #buyLottoCnt;
  #LottoArray = [];

  async play() {
    await this.buyAmount();
    this.countLotto();
    this.buyLotto();

    console.log('---------');
    console.log('구입금액: ', this.getBuyLottoAmount());
    console.log('로또 구매 갯수: ', this.getBuyLottoCnt());
    console.log('로또 번호: ', this.getLottoArray());
  }

  async buyAmount() {
    this.#buyLottoAmount = await inputBuyAmount();
  }

  countLotto() {
    this.#buyLottoCnt = this.#buyLottoAmount / LOTTO_PRICE;
  }

  buyLotto() {
    printBuyLotto(this.#buyLottoCnt);

    for (let i = 0; i < this.#buyLottoCnt; i++) {
      this.#LottoArray.push(this.makeLotto());
    }
    printLottoArray(this.#LottoArray);
  }

  makeLotto() {
    const lotto = new Lotto(getRandomNumber());
    return lotto.getNumbers();
  }

  getBuyLottoAmount() {
    return this.#buyLottoAmount;
  }

  getBuyLottoCnt() {
    return this.#buyLottoCnt;
  }

  getLottoArray() {
    return this.#LottoArray;
  }
}
