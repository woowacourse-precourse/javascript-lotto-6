import lottoCompare from '../utils/lottoCompare.js';
import printLottoResult from '../print/printLottoResult.js';

class LottoComparison {
  #myLotto;
  #winningNumbers;
  #bonusNumber;
  #rank = new Map([
    [3, 0],
    [4, 0],
    [5, 0],
    [5.5, 0],
    [6, 0],
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
