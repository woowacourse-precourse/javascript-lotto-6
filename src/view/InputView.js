import { MissionUtils } from '@woowacourse/mission-utils';

const Console = MissionUtils.console;
class InputView {
  money = 0;

  winningnumbers = [];

  bonusNumber = 0;

  async inputMoney() {
    this.money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    // 금액 입력 예외 처리
  }

  async inputNumbers() {
    this.winningnumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    // 당첨 번호 입력 예외처리
  }

  async inputBonusNumber() {
    this.bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    // 보너스 번호 입력 예외 처리
  }
}

export default InputView;
