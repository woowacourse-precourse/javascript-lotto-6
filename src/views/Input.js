import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message';

const Input = {
  async readPrice() {
    const price = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_PRICE);
    return price;
  },
};
export default Input;
