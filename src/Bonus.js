import Validation from "./Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Bonus {
  #bonus;

  constructor(numbers) {
    this.#bonus = this.getBonus();
  }

  async getBonus () {
    const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해주세요.');
    return Validation.checkBonus(input);
  }

}
export default Bonus;
