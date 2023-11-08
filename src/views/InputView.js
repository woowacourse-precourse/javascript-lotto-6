import { Console } from '@woowacourse/mission-utils';
import validate from '../utils/validate';

const InputView = {
  async InputMoney() {
    const money = parseInt(
      await Console.readLineAsync('구매금액을 입력해 주세요.'),
      10,
    );
    validate.isValidate(money);
    return money;
  },
};

export default InputView;
