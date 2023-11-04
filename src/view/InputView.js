import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../util/constant.js';

const InputView = {
  async moneyInput() {
    try {
      return await Console.readLineAsync(MESSAGE.moneyInput);
    } catch (error) {
      throw new Error(error);
    }
  },

  async lottoNumberInput() {
    try {
      return await Console.readLineAsync(MESSAGE.lottoNumberInput);
    } catch (error) {
      throw new Error(error);
    }
  },

  async bonusNumberInput() {
    try {
      return await Console.readLineAsync(MESSAGE.bonusNumberInput);
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default InputView;
