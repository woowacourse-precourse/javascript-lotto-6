import { LOTTO_PRICE } from '../constants/GameSetting.js';
import { getRandomNumber } from '../utils/RandomNumber.js';
import { inputBuyAmount, printBuyLotto } from '../view/View.js';

export default class LottoGameController {
  #buyLottoAmount;
  #buyLottoCnt;
  #LottoArray = [];

  async play() {
    await this.buyAmount();
    this.countLotto();
    this.buyLotto();

    console.log('구입금액: ', this.getBuyLottoAmount());
    console.log('로또 구매 갯수: ', this.getBuyLottoCnt());
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
  }

  makeLotto() {
    const a = getRandomNumber();
    console.log('pick:', a);
  }

  getBuyLottoAmount() {
    return this.#buyLottoAmount;
  }

  getBuyLottoCnt() {
    return this.#buyLottoCnt;
  }
}
