import { MissionUtils } from '@woowacourse/mission-utils';

class InputMethod {
  static async input(inputConstants) {
    const tmp = await MissionUtils.Console.readLineAsync(inputConstants);
    return tmp;
  }
}

export default InputMethod;
