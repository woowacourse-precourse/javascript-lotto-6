import Lotto from '../Lotto.js';
import { LOTTO_PRICE } from '../constants/GameSetting.js';
import { getRandomNumber } from '../utils/RandomNumber.js';
import {
  inputBounsNumber,
  inputBuyAmount,
  inputWinningLotto,
  printBuyLotto,
  printLottoArray,
} from '../view/View.js';

export default class LottoGameController {
  #buyLottoAmount;
  #buyLottoCnt;
  #createdLottoNumbers = [];
  #winningLottoNumbers;
  #bonusNumber;

  async play() {
    await this.buyAmount();
    this.countLotto();
    this.buyLotto();
    await this.giveLottoNumbers();
    await this.giveBonusNumber();

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
      this.#createdLottoNumbers.push(this.makeLotto());
    }
    printLottoArray(this.#createdLottoNumbers);
  }

  makeLotto() {
    const lotto = new Lotto(getRandomNumber());
    return lotto.getNumbers();
  }

  async giveLottoNumbers() {
    this.#winningLottoNumbers = await inputWinningLotto();
  }

  async giveBonusNumber() {
    this.#bonusNumber = await inputBounsNumber(this.#winningLottoNumbers);
  }

  getBuyLottoAmount() {
    return this.#buyLottoAmount;
  }

  getBuyLottoCnt() {
    return this.#buyLottoCnt;
  }

  getCreatedLottoNumbers() {
    return this.#createdLottoNumbers;
  }
}
