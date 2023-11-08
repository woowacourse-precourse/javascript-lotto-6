import { Console } from '@woowacourse/mission-utils';
import LOTTO_MESSAGE from '../../constant/LottoMessage.js';

const Input = (superClass) =>
  class extends superClass {
    static requestMoney() {
      return Console.readLineAsync(LOTTO_MESSAGE.requestMoney);
    }

    static requestWinningLotto() {
      return Console.readLineAsync(LOTTO_MESSAGE.requestWinningLotto);
    }

    static requestBonusNumber() {
      return Console.readLineAsync(LOTTO_MESSAGE.requestBonusNumber);
    }
  };

export default Input;
