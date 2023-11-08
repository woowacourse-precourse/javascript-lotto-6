import { printLottery } from '../view/outputPompt.js';

class LottoList {
  #myLottos = [];

  add(lotto) {
    return this.#myLottos.push(lotto);
  }

  getLottoCount() {
    return this.#myLottos.length;
  }

  printMyLottery() {
    this.#myLottos.forEach((lotto) => printLottery(lotto.getLottery()));
  }

  getMyLottoList() {
    return this.#myLottos;
  }
}

export default LottoList;
