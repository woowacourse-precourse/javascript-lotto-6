import { MissionUtils } from "@woowacourse/mission-utils";

class InputOutput {
  static async getInput(message) {
    try {
      const input = await MissionUtils.Console.readLineAsync(message);
      return input;
    } catch (error) {
      throw new Error("[ERROR] 입력을 받는 중 실패하였습니다.");
    }
  }

  static print(message) {
    MissionUtils.Console.print(message);
  }
}

export default InputOutput;