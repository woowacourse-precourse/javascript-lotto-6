import { Console } from "@woowacourse/mission-utils";
import { INPUT_QUERY } from "../constants/messages.js";

const InputView = {
  async readInput(query) {
    return await Console.readLineAsync(query);
  },

  async readMoney() {
    return await this.readInput(INPUT_QUERY.money);
  },

  async readLottoAnswer() {
    return await this.readInput(INPUT_QUERY.lottoAnswer);
  },

  async readBonusNumber() {
    return await this.readInput(INPUT_QUERY.bonusNumber);
  },
};

export default InputView;
