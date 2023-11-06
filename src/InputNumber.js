import { MissionUtils } from '@woowacourse/mission-utils';

class InputNumber {
  win;
  bonus;

  getWinNumber = async () => {
    const numberString = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    this.win = numberString.split(',');
  };
  getBonusNumber = async () => {
    this.bonus = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  };
}

export default InputNumber;
