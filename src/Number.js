import { MissionUtils } from '@woowacourse/mission-utils';

class Number {
  winnigNumber;
  bonusNumber;

  getWinningNumber = async () => {
    const numberString = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    this.winnigNumber = numberString.split(',');
  };
  getBonusNumber = async () => {
    this.bonusNumber = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  };
}

export default Number;

