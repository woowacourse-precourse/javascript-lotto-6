import { Console } from '@woowacourse/mission-utils';

class UserInput {
  amount;
  
  winningNumbers;

  bonus;

  async amountInput() {
    this.amount = await Console.readLineAsync("");
    return this.amount;
  }

  async winningNumbersInput() {
    this.winningNumbers = await Console.readLineAsync("");
    await Console.print("")
    return this.winningNumbers;
  }
}

export default UserInput;
