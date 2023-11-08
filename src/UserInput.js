import { Console } from '@woowacourse/mission-utils';

class UserInput {
  amount;
  
  winningNumbers;

  bonus;

  async amountInput() {
    this.amount = await Console.readLineAsync("");
    return this.amount;
  }

}

export default UserInput;
