import { Console } from "@woowacourse/mission-utils";
import { ERROR, MESSAGE } from "./util/Message.js";
import { INPUT, LOTTO, STR_REWARD } from "./util/constant.js";

class View {
  async getLottoPurchaseAmount() {
    let amount;
    while (true) {
      try {
        amount = await this.readLine(MESSAGE.inputAmount);
        this.amountValidate(amount);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return amount;
  }

  async getLottoWinningNumbers() {
    let winningNumbers;
    while (true) {
      try {
        let userInput = await this.readLine(MESSAGE.inputWinningNumber);
        winningNumbers = userInput.split(INPUT.lottoNumSep).map(Number);
        this.validateWinningNumbers(winningNumbers);
        this.validateDuplicate(winningNumbers);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return winningNumbers;
  }

  async getLottoBonusNumber(winningNumbers) {
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await this.readLine(MESSAGE.inputBonusNumber);
        this.validateNumberRange(bonusNumber);
        this.validateNoDuplicateBonusNumber(winningNumbers, bonusNumber);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return bonusNumber;
  }

  amountValidate(amount) {
    if (amount % LOTTO.price !== 0) {
      throw new Error(ERROR.inputAmount);
    }
  }

  validateWinningNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      this.validateNumberRange(numbers[i]);
    }
  }

  validateNoDuplicateBonusNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR.lottoBonusDuplicate);
    }
  }

  validateNumberRange(number) {
    if (number < LOTTO.minimum || number > LOTTO.maximum) {
      throw new Error(ERROR.lottoNumRange);
    }
  }

  validateDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO.numLength) {
      throw new Error(ERROR.lottoWinningNumDuplicate);
    }
  }

  getLottoResult(prize, profitRate) {
    Console.print("\n당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (${STR_REWARD.fifth}원) - ${prize.fifth}개`);
    Console.print(`4개 일치 (${STR_REWARD.fourth}원) - ${prize.fourth}개`);
    Console.print(`5개 일치 (${STR_REWARD.third}원) - ${prize.third}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (${STR_REWARD.second}원) - ${prize.second}개`
    );
    Console.print(`6개 일치 (${STR_REWARD.first}원) - ${prize.first}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  async readLine(query) {
    return await Console.readLineAsync(query);
  }
}

export default View;
