import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constant/Message.js";


class Input {

  async Price() {
    const lottoAnswer = await Console.readLineAsync(MESSAGE.input.price);
    return lottoAnswer;
  }

  async Number() {
    const lottoAnswer = await Console.readLineAsync(MESSAGE.input.number);
    return lottoAnswer;
  }

  async BonusLottoNumber() {
    const lottoAnswer = await Console.readLineAsync(MESSAGE.input.bonus_number);
    return lottoAnswer;
  }
}

export default Input;
