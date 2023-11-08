import lottoCompare from '../utils/lottoCompare.js';
import RANK from '../constants/rank.js';
import RATE from '../constants/rate.js';
import PRIZE from '../constants/prize.js';
import { OUTPUT_MESSAGES } from '../constants/messages.js';
import LOTTO_CONSTANT from '../constants/lotto.js';
import { Console } from '@woowacourse/mission-utils';

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
    this.#printResult(this.#myLotto.length, this.#rank);
  }

  #compare(lottos) {
    lottos.forEach((lotto) => lottoCompare(lotto, this.#winningNumbers, this.#bonusNumber, this.#rank));
  }

  #printResult(lottoTicketNumber, ranks) {
    const income = Array.from(ranks).reduce((acc, [_, value], idx) => acc + value * PRIZE[idx], 0);
    const input = lottoTicketNumber * LOTTO_CONSTANT.price;
    const rateOfReturn = +((income / input) * RATE.percent).toFixed(RATE.float);

    OUTPUT_MESSAGES.result(ranks).forEach((result) => Console.print(result));
    Console.print(OUTPUT_MESSAGES.rate(rateOfReturn));
  }
}

export default LottoComparison;
