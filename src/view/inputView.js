import InputService from '../service/InputService.js';

class InputView {
  constructor() {}

  static async readPurchaseMoney() {
    return await InputService.setPurchaseMoney('구입금액을 입력해 주세요.\n');
  }
  static async readWinningNumber() {
    return await InputService.setWinningNumber('당첨 번호를 입력해 주세요.\n');
  }
  static async readBonusNumber(winningNumber) {
    return await InputService.setBonusNumber(
      '보너스 번호를 입력해 주세요.\n',
      winningNumber
    );
  }
}

export default InputView;
