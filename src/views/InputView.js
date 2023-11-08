import { Console } from "@woowacourse/mission-utils";
import { IN_GAME_MESSAGE } from "../models/Constants.js";
import InputValidation from "../validations/InputValidation.js";

const InputView = {
  async receiveCost() {
    while (true) {
      try {
        const cost = await Console.readLineAsync(IN_GAME_MESSAGE.getCost);
        InputValidation.checkCost(cost);

        return cost;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  async receiveNumbers() {
    while (true) {
      try {
        const numbers = (
          await Console.readLineAsync(IN_GAME_MESSAGE.getNumbers)
        ).split(",");
        InputValidation.checkNumbers(numbers);

        return numbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  async receiveBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(
          IN_GAME_MESSAGE.getBonusNumber
        );
        InputValidation.checkBonusNumber(bonusNumber);

        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
};

export default InputView;
