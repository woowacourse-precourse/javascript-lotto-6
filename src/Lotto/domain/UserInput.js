import { MissionUtils } from '@woowacourse/mission-utils';

class UserInput {
  static money = async () => {
    const MONEY = await MissionUtils.Console.readLineAsync(
      '구입 금액을 입력해 주세요 : '
    );
    return MONEY;
  };

  static winNumber = async () => {
    const WIN_NUMBER = await MissionUtils.Console.readLineAsync(
      '당첨 번호를 입력해 주세요 \n ,(쉼표) 기준으로 구분 : '
    );
    return WIN_NUMBER.split(',');
  };

  static bonusNumber = async () => {
    const BONUS_NUMBER = await MissionUtils.Console.readLineAsync(
      '보너스 번호를 입력해 주세요 : '
    );
    return BONUS_NUMBER;
  };
}

export default UserInput;
