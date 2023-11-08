import LottoGenerator from './LottoGenerator.js';
import { LOTTO_CONSTANTS } from '../util/constant/index.js';

class LottoGame {
  #purchaseMoney;
  #lottoCount;
  #lottoTickets;
  #winningNumber;
  #bonusNumber;

  //로또를 발행하기
  generateLottoTickets(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
    this.#lottoCount = this.calculateLottoCount();
    this.#lottoTickets = new LottoGenerator(this.#lottoCount).getLottoTickets();
  }

  calculateLottoCount() {
    return Math.floor(this.#purchaseMoney / LOTTO_CONSTANTS.PRICE);
  }

  setWinningNumbers(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber.split(',').map(Number);
    this.#bonusNumber = Number(bonusNumber);
  }

  getPurchaseMoney() {
    return this.#purchaseMoney;
  }
  getLottoCount() {
    return this.#lottoCount;
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  getWinningNumber() {
    return this.#winningNumber;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  consoleField() {
    console.log('lottoCount', this.#lottoCount);
    console.log('lottoTickets', this.#lottoTickets);
    console.log('winningNumber', this.#winningNumber);
    console.log('bonusNumber', this.#bonusNumber);
  }
}

export default LottoGame;
