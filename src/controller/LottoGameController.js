import { LOTTO_PRICE } from '../constants/GameSetting.js';
import { inputBuyAmount } from '../view/View.js';

export default class LottoGameController {
  #buyLottoAmount;
  #buyLottoCnt;

  async play() {
    await this.buyAmount();
    this.buyLotto();

    console.log('구입금액: ', this.getBuyLottoAmount());
    console.log('로또 구매 갯수: ', this.getBuyLottoCnt());
  }

  async buyAmount() {
    this.#buyLottoAmount = await inputBuyAmount();
  }

  buyLotto() {
    this.#buyLottoCnt = this.#buyLottoAmount / LOTTO_PRICE;
  }

  getBuyLottoAmount() {
    return this.#buyLottoAmount;
  }

  getBuyLottoCnt() {
    return this.#buyLottoCnt;
  }
}
