import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

class InputView {
  async receiveTotalMoney(){
    // '구입금액을 입력해 주세요.'
    const input = await Console.readLineAsync(INPUT_MESSAGE.totalMoney);
    return input;
  }
}

export default InputView;