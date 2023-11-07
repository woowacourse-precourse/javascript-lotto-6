import { Console } from '@woowacourse/mission-utils';

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

    console.log(winningNumbersList);

    return winningNumbersList;
  }
}

export default InputView;
