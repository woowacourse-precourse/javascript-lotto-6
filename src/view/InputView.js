import { Console } from '@woowacourse/mission-utils';

class InputView {
  async readPurchaseAmount() {
    const purchaseAmount =
      await Console.readLineAsync('구입 금액을 입력해주세요.\n');
    return purchaseAmount;
  }

  async readLottoNumber() {
    const winningLottoNumber =
      await Console.readLineAsync('당첨 번호를 입력해주세요.\n');
    return winningLottoNumber;
  }

  async readBonusNumber() {
    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해주세요.\n');
    return bonusNumber;
  }
}

export default InputView;