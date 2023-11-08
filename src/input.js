import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from "./Validation";


class Input {
  async getMoney () {
    const input = await MissionUtils.Console.readLineAsync('구매금액을 입력해 주세요.');
    return Validation.checkMoney(input);
  }

  async getNumbers () {
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
    return Validation.checkNumbers(input);
  }

  async getBonus () {
    const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해주세요.');
    return Validation.checkBonus(input);
  }
}
  
  export default Input;