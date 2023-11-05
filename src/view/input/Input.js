import { Console } from '@woowacourse/mission-utils';
import LOTTO_MESSAGE from '../../constant/LottoMessage.js';

const Input = (superClass) =>
  class extends superClass {
    static requestMoney() {
      return Console.readLineAsync(LOTTO_MESSAGE.requestMoney);
    }

    static requestLotto() {
      return Console.readLineAsync(LOTTO_MESSAGE.requestLotto);
    }

    static requestBonusNumber() {
      return Console.readLineAsync(LOTTO_MESSAGE.requestBonusNumber);
    }
  };

export default Input;
