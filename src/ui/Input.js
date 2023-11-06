import { Console } from '@woowacourse/mission-utils';
import { USER_INPUT } from '../constants/Logs';
import Validation from '../domain/Validation';

class UserInput {
  async getLottoPurchaseAmount() {
    try {
      const purchaseMoneyInput = await Console.readLineAsync(
        USER_INPUT.purchaseAmountInputPrompt,
      );
      Validation.isPurchaseMoneyValidated(purchaseMoneyInput);
      return Number(purchaseMoneyInput) % 1000;
    } catch (error) {
      Console.print(error.message);
      return this.getLottoPurchaseAmount();
    }
  }
}

const userInput = new UserInput();
userInput.getLottoPurchaseAmount();

export default UserInput;
