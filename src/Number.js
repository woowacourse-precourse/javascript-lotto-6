import { MissionUtils } from '@woowacourse/mission-utils';

class Number {
  winnigNumber;

  getWinningNumber = async () => {
    const numberString = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    this.winnigNumber = numberString.split(',');
  };
}

export default Number;
