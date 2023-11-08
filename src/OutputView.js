import { Console } from '@woowacourse/mission-utils';
import { TEMPLATE, WINNING_STATISTICS } from './LottoMessage.js';

class OutputView {
  static #DELIMITER = ',';

  static printLottoCount(lottoCount) {
    const message = TEMPLATE.lottoCount(lottoCount);
    OutputView.print(message);
  }

  static printLottos(lottos) {
    const sortedLottos = OutputView.#getSorted(lottos);
    const message = sortedLottos.reduce(
      (acc, cur) => acc + TEMPLATE.sortedLotto(cur.join(`${this.#DELIMITER} `)),
      '',
    );
    OutputView.print(message);
  }

  static #getSorted(arrays) {
    return arrays.map((array) => array.sort((a, b) => a - b));
  }

  static printWinningResults(winningResults) {
    let message = WINNING_STATISTICS;
    message += this.#getWinningResultsMessage(winningResults);
    OutputView.print(message);
  }

  static #getWinningResultsMessage(winningResults) {
    let message = '';
    const reversedMap = OutputView.#getReversedMap(winningResults);
    reversedMap.forEach((count, ranking) => {
      message += TEMPLATE.winnigResultsBy[ranking](count);
    });
    return message;
  }

  static #getReversedMap(array) {
    return new Map(array.reverse());
  }

  static printProfitRate(profitRate) {
    const trimmedRate = OutputView.#getTrimmedRate(profitRate);
    const message = TEMPLATE.profitRate(trimmedRate);
    OutputView.print(message);
  }

  static #getTrimmedRate(rate) {
    const roundedRate = OutputView.#getRoundedRate(rate);
    const includesDot = roundedRate.toString().includes('.');
    return includesDot ? roundedRate : `${roundedRate}.0`;
  }

  static #getRoundedRate(rate) {
    return Math.round(rate * 10) / 10;
  }

  static print(message) {
    Console.print(message);
  }
}

export default OutputView;
