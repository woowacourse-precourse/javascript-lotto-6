import { Console } from '@woowacourse/mission-utils';
import { QUERY, TEMPLATE, WINNING_STATISTICS } from './LottoMessage.js';

class View {
  static #DELIMITER = ',';

  static async askPurchaseAmount() {
    const answer = await Console.readLineAsync(QUERY.purchaseAmount);
    return Number(answer);
  }

  static async askWinningNumbers() {
    const answer = await Console.readLineAsync(QUERY.winningNumbers);
    const winningNumbers = answer.split(View.#DELIMITER).map(Number);
    return winningNumbers;
  }

  static async askBonusNumber() {
    const answer = await Console.readLineAsync(QUERY.bonusNumber);
    return Number(answer);
  }

  static printLottoCount(lottoCount) {
    const message = TEMPLATE.lottoCount(lottoCount);
    View.print(message);
  }

  static printLottos(lottos) {
    const sortedLottos = View.#getSorted(lottos);
    const message = sortedLottos.reduce(
      (acc, cur) => acc + TEMPLATE.sortedLotto(cur.join(`${this.#DELIMITER} `)),
      '',
    );
    View.print(message);
  }

  static #getSorted(arrays) {
    return arrays.map((array) => array.sort((a, b) => a - b));
  }

  static printWinningResults(winningResults) {
    let message = WINNING_STATISTICS;
    message += this.#getWinningResultsMessage(winningResults);
    View.print(message);
  }

  static #getWinningResultsMessage(winningResults) {
    let message = '';
    const reversedMap = View.#getReversedMap(winningResults);
    reversedMap.forEach((count, ranking) => {
      message += TEMPLATE.winnigResultsBy[ranking](count);
    });
    return message;
  }

  static #getReversedMap(array) {
    return new Map(array.reverse());
  }

  static printProfitRate(profitRate) {
    const trimmedRate = View.#getTrimmedRate(profitRate);
    const message = TEMPLATE.profitRate(trimmedRate);
    View.print(message);
  }

  static #getTrimmedRate(rate) {
    const roundedRate = View.#getRoundedRate(rate);
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

export default View;
