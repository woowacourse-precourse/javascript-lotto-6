import { MissionUtils } from '@woowacourse/mission-utils';
import ExceptionList from './ExceptionList.js';

class InputNumber {
  win;
  bonus;

  getWinNumber = async () => {
    try {
      const numberString = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      let exception = new ExceptionList();
      exception.noInputError(numberString);
      this.win = numberString.split(',');
      exception.LengthError(this.win);
      this.win.forEach((number) => {
        exception.isNaNError(number);
        exception.numberRangeError(number);
      });
      exception.sameNumberError(this.win);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.getWinNumber();
    }
  };

  getBonusNumber = async () => {
    try {
      this.bonus = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
      let exception = new ExceptionList();
      exception.noInputError(this.bonus);
      exception.isNaNError(this.bonus);
      exception.numberRangeError(this.bonus);
      exception.sameBonusError(this.win, this.bonus);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.getBonusNumber();
    }
  };
}

export default InputNumber;
