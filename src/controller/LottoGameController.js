import Lotto from '../Lotto.js';
import { LOTTO_PRICE } from '../constants/GameSetting.js';
import { getRandomNumber } from '../utils/RandomNumber.js';
import { inputBuyAmount, inputWinningLotto, printBuyLotto, printLottoArray } from '../view/View.js';

export default class LottoGameController {
  #buyLottoAmount;
  #buyLottoCnt;
  #lottoArray = [];
  #winningLotto;

  async play() {
    await this.buyAmount();
    this.countLotto();
    this.buyLotto();
    await this.inputLotto();

    // console.log('---------');
    // console.log('구입금액: ', this.getBuyLottoAmount());
    // console.log('로또 구매 갯수: ', this.getBuyLottoCnt());
    // console.log('로또 번호: ', this.getLottoArray());
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
      this.#lottoArray.push(this.makeLotto());
    }
    printLottoArray(this.#lottoArray);
  }

  makeLotto() {
    const lotto = new Lotto(getRandomNumber());
    return lotto.getNumbers();
  }

  // TODO: 로또 번호 입력받기
  async inputLotto() {
    const a = await inputWinningLotto();
    console.log('로또 번호: ', a);
  }

  getBuyLottoAmount() {
    return this.#buyLottoAmount;
  }

  getBuyLottoCnt() {
    return this.#buyLottoCnt;
  }

  getLottoArray() {
    return this.#lottoArray;
  }
}
