import Validation from "./Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    
    this.#numbers = this.getNumbers();
  }

  async getNumbers () {
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
    return Validation.checkNumbers(input);
  }

}
export default Lotto;
