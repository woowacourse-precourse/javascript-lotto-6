import LottoNumberGenerator from "./LottoNumberGenerator.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {message} from "./constant.js";

class LottoMachine {
  inputMoney = 0;

  constructor(inputMoney) {
    this.inputMoney = inputMoney;
    this.winningNumbers = [];
  }

  countTicketsAmount(money) {
    return Math.floor(Number(money) / 1000);
  }

  async printWinningNumbers() {
    const numTickets = this.countTicketsAmount(this.inputMoney);
    const winningNumberList = this.generateWinningNumbers();
    MissionUtils.Console.print(`${numTickets}${message.PURCHASE_LOTTO}`);
    winningNumberList.forEach((winningNumber) => {
      const numbers = winningNumber.getNumbers();
      const numbersAsString = `[${numbers.join(', ')}]`;
      MissionUtils.Console.print(`${numbersAsString}`);
    });
    MissionUtils.Console.print(message.EMPTY_UNIT);
  }

  generateWinningNumbers() {
    if (this.winningNumbers.length > 0) {
      return this.winningNumbers;
    }
    const numTickets = this.countTicketsAmount(this.inputMoney);
    for (let i = 0; i < numTickets; i++) {
      const numbers = this.generateLottoNumbers();
      const winningNumber = new Lotto(numbers);
      this.winningNumbers.push(winningNumber);
    }
    return this.winningNumbers;
  }

  generateLottoNumbers() {
    return LottoNumberGenerator();
  }
}

export default LottoMachine;
