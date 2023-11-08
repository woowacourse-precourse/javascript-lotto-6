import { Console } from '@woowacourse/mission-utils';
import { QUERY, TEMPLATE, WINNING_STATISTICS } from './LottoMessage.js';

class View {
  static #DELIMITER = ',';
  static #DIVISION_LINE = '---';

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

  static printSortedLottos(sortedLottos) {
    const message = sortedLottos.reduce(
      (acc, cur) => acc + TEMPLATE.sortedLotto(cur.join(`${this.#DELIMITER} `)),
      '',
    );
    View.print(message);
  }

  static printWinningResults(resultArray) {
    View.print(WINNING_STATISTICS);
    View.print(View.#DIVISION_LINE);

    const message = this.#getWinningResultsMessage(resultArray);
    View.print(message);
  }

  static #getWinningResultsMessage(resultArray) {
    let message = '';
    const reversedResultMap = View.#getReversedResultMap(resultArray);
    reversedResultMap.forEach((count, ranking) => {
      message += TEMPLATE.winnigResultsBy[ranking](count);
    });
    return message;
  }

  static #getReversedResultMap(resultArray) {
    return new Map(resultArray.reverse());
  }

  static printProfitRate(profitRate) {
    const trimmedRate = View.getTrimmedRate(profitRate);
    const message = TEMPLATE.profitRate(trimmedRate);
    View.print(message);
  }

  static getTrimmedRate(rate) {
    const roundedRate = View.getRoundedRate(rate);
    const includesDot = roundedRate.toString().includes('.');
    return includesDot ? roundedRate : `${roundedRate}.0`;
  }

  static getRoundedRate(rate) {
    return Math.round(rate * 10) / 10;
  }

  static print(message) {
    Console.print(message);
  }
}

export default View;
