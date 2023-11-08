import { MissionUtils } from "@woowacourse/mission-utils";
import ExceptionList from "./ExceptionList";


class Input{
    getPayedMoney = async () => {
        try {
          let payedMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
          let exception = new ExceptionList();
          exception.noInputError(payedMoney);
          exception.isNaNError(payedMoney);
          exception.isZeroError(payedMoney);
          exception.notThousandError(payedMoney);
          return payedMoney;
        } catch (error) {
          MissionUtils.Console.print(error.message);
          await this.getPayedMoney();
        }
      };
      getWinNumber = async () => {
        try {
          const numberString = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
          let exception = new ExceptionList();
          exception.noInputError(numberString);
          let win = numberString.split(',');
          exception.LengthError(win);
          win.forEach((number) => {
            exception.isNaNError(number);
            exception.numberRangeError(number);
          });
          exception.sameNumberError(win);
          return numberString;
        } catch (error) {
          MissionUtils.Console.print(error.message);
          await getWinNumber();
        }
      };
      getBonusNumber = async () => {
        try {
          const bonus = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
          let exception = new ExceptionList();
          exception.noInputError(bonus);
          exception.isNaNError(bonus);
          exception.numberRangeError(bonus);
          // exception.sameBonusError(win, bonus);
          return bonus;
        } catch (error) {
          MissionUtils.Console.print(error.message);
          await this.getBonusNumber();
        }
      };
}

export default Input;