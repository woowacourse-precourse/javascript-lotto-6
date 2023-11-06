import { Console } from '@woowacourse/mission-utils';

const INPUT_PURCHASING_AMOUNT = '구입금액을 입력해 주세요.\n';
const INPUT_WINNING_NUMBER = '당첨 번호를 입력해 주세요.\n';
const INPUT_BONUST_NUMBER = '보너스 번호를 입력해 주세요.';

class InputView {
  async inputWinningNumber() {
    const playerInput = await Console.readLineAsync(INPUT_WINNING_NUMBER);
    return playerInput;
  }

  stringToNumber(inputNumber) {
    return inputNumber.split(',').map(Number);
  }
}
