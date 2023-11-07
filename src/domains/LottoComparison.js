import lottoCompare from '../utils/lottoCompare.js';
import printLottoResult from '../print/printLottoResult.js';
import RANK from '../constants/rank.js';

class LottoComparison {
  #myLotto;
  #winningNumbers;
  #bonusNumber;
  #rank = new Map([
    [RANK.fifth, 0],
    [RANK.fourth, 0],
    [RANK.third, 0],
    [RANK.second, 0],
    [RANK.first, 0],
  ]);

  constructor(myLotto, winningLottoMachine) {
    this.#myLotto = myLotto;
    this.#winningNumbers = winningLottoMachine.winningNumbers;
    this.#bonusNumber = winningLottoMachine.bonusNumber;
  }

  run() {
    this.#compare(this.#myLotto);
    this.#printResult(this.#rank);
  }

  #compare(lottos) {
    lottos.forEach((lotto) => lottoCompare(lotto, this.#winningNumbers, this.#bonusNumber, this.#rank));
  }

  #printResult(rank) {
    printLottoResult(this.#myLotto.length, rank);
  }
}

export default LottoComparison;
