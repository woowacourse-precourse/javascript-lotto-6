import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "../models/Constants.js";
import InputValidation from "../validations/InputValidation.js";

const InputView = {
  async receiveCost() {
    const cost = await Console.readLineAsync(IN_GAME_MESSAGE.getCost);
    InputValidation.checkCost(cost);

    return cost;
  },

  async receiveNumbers() {
    const numbers = (
      await Console.readLineAsync(IN_GAME_MESSAGE.getNumbers)
    ).split(",");
    InputValidation.checkNumbers(numbers);

    return numbers;
  },

  async receiveBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      IN_GAME_MESSAGE.getBonusNumber
    );
    InputValidation.checkBonusNumber(bonusNumber);

    return bonusNumber;
  },
};

export default InputView;
