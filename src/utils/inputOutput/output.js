import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static print(outputText) {
    MissionUtils.Console.print(outputText);
  }

  static printArray(numbers) {
    MissionUtils.Console.print(`[${numbers.join(', ')}]`);
  }
}

export default Output;
