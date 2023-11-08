import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "../models/Constants.js";

const InputView = {
  async receiveCost() {
    const cost = await Console.readLineAsync(IN_GAME_MESSAGE.getCost);

    return cost;
  },

  async receiveNumbers() {
    const numbers = await Console.readLineAsync(IN_GAME_MESSAGE.getNumbers);

    return numbers;
  },

  async receiveBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      IN_GAME_MESSAGE.getBonusNumber
    );

    return bonusNumber;
  },
};

export default InputView;
