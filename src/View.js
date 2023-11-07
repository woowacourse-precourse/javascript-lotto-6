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

  static printWinningResults(resultMap) {
    View.print(WINNING_STATISTICS);
    View.print(View.#DIVISION_LINE);

    let message = '';
    resultMap.forEach((count, ranking) => {
      message += TEMPLATE.winnigResultsBy[ranking](count);
    });
    View.print(message);
  }

  static print(message) {
    Console.print(message);
  }
}

export default View;
