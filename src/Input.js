/* eslint-disable class-methods-use-this */
import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  async simpleInput(questionStr) {
    const simpleInput = await MissionUtils.Console.readLineAsync(
      `${questionStr}`,
    );
    return simpleInput;
  }

  async inputChangeToArr(questionStr) {
    const input = await MissionUtils.Console.readLineAsync(`${questionStr}`);
    const changeToArr = input.split(',').map(Number);
    return changeToArr;
  }
}

export default Input;
