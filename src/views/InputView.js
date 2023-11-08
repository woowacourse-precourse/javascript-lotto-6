import { MissionUtils } from '@woowacourse/mission-utils';

class InputView {
  static async inputParchaseCost() {
    return MissionUtils.Console.readLineAsync('구입 금액을 입력해 주세요. \n');
  }

  static async inputWinningNumbers() {
    return MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요. \n');
  }

  static async inputBonusNumber() {
    return MissionUtils.Console.readLineAsync(
      '보너스 번호를 입력해 주세요. \n',
    );
  }
}

export default InputView;