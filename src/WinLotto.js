import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";
import ERROR_MESSAGE from "./Errors.js";

class WinLotto {
  constructor(winningNumbers, bonusNumber, ticketNumbers) {
    this.winningNumbers = winningNumbers.map((num) => parseInt(num, 10));
    this.bonusNumber = parseInt(bonusNumber, 10);
    this.ticketNumbers = ticketNumbers.map((ticket) =>
      ticket.map((num) => parseInt(num, 10))
    );
    this.validateNumbers(this.winningNumbers, this.bonusNumber);
  }

  validateNumbers(winningNumbers, bonusNumber) {
    const allNumbers = [...winningNumbers, bonusNumber];
    if (new Set(allNumbers).size !== allNumbers.length) {
      throw new Error(ERROR_MESSAGE.duplicateNumbers);
    }
  }

  compareNumbers() {
    let winningAndBonusCount = [];

    this.ticketNumbers.forEach((ticket) => {
      const matchCount = ticket.filter((num) =>
        this.winningNumbers.includes(num)
      ).length;

      const bonusMatch = ticket.includes(this.bonusNumber) ? 1 : 0;

      winningAndBonusCount.push({
        matchCount: matchCount,
        bonusMatch: bonusMatch,
      });
    });

    return winningAndBonusCount;
  }
}

export default WinLotto;
