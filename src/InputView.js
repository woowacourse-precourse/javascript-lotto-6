import { Console } from '@woowacourse/mission-utils';

class InputView {
  
  async readPurchaseAmount() {
    const amount = Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return amount;
  }

  async readWinningNumber() {
    const numbers = Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return numbers;
  }

  async readBonusNumber() {
    const bonusNum = Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return bonusNum;
  }
}

export default InputView;