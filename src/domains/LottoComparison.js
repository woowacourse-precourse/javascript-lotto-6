import compareLottoNumbers from '../utils/compareLottoNumbers.js';
import RANK from '../constants/rank.js';
import RATE from '../constants/rate.js';
import PRIZE from '../constants/prize.js';
import LOTTO_CONSTANT_NUMBER from '../constants/lotto.js';

class LottoComparison {
  #myLottos;
  #winningNumbers;
  #bonusNumber;
  #rank = new Map([
    [RANK.fifth, 0],
    [RANK.fourth, 0],
    [RANK.third, 0],
    [RANK.second, 0],
    [RANK.first, 0],
  ]);
  #rateOfReturn;

  constructor(lottoBox, winningLottoMachine) {
    this.#myLottos = lottoBox;
    this.#winningNumbers = winningLottoMachine.winningNumbers;
    this.#bonusNumber = winningLottoMachine.bonusNumber;
  }

  run() {
    this.#compare(this.#myLottos);
    this.#calculateRateOfReturn(this.#myLottos.length, this.#rank);
  }

  #compare(lottos) {
    lottos.forEach((lotto) => compareLottoNumbers(lotto, this.#winningNumbers, this.#bonusNumber, this.#rank));
  }

  #calculateRateOfReturn(lottoTicketNumber, rank) {
    const income = Array.from(rank).reduce((acc, [_, value], idx) => acc + value * PRIZE[idx], 0);
    const input = lottoTicketNumber * LOTTO_CONSTANT_NUMBER.price;
    const rateOfReturn = +((income / input) * RATE.percent).toFixed(RATE.float);

    this.#rateOfReturn = rateOfReturn;
  }

  get rank() {
    return this.#rank;
  }

  get rateOfReturn() {
    return this.#rateOfReturn;
  }
}

export default LottoComparison;
