import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
  async getValue(message) {
    const INPUT = await MissionUtils.Console.readLineAsync(message)
    return String(INPUT)
  }
}

export default Input;