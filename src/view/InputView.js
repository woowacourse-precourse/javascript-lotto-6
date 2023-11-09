import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView.js';

class InputView {
  static async readLottoAmount() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  static async readLottoWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );

    const winningNumbersList = winningNumbers
      .split(',')
      .map((number) => parseInt(number.trim()));

    return winningNumbersList;
  }

  static async readLottoBonusNumber() {
    OutputView.printBlankLine();
    const bonusNumber = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );

    return parseInt(bonusNumber);
  }
}

export default InputView;
