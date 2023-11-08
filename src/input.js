import { MissionUtils } from "@woowacourse/mission-utils";


class Input {
  async getMoney () {
    const input = await MissionUtils.Console.readLineAsync('구매금액을 입력해 주세요.');
    return input;
  }

  async getNumbers () {
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
    return input;
  }
}
  
  export default Input;