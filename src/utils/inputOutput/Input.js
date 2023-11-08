import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  static async readLineAsync(inputText) {
    const inputValue = await MissionUtils.Console.readLineAsync(`${inputText}`);
    return inputValue;
  }
}

export default Input;
