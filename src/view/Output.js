import { MissionUtils } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE, WINNING_RESULT_DETAILS } from "../constants/constants";

class Output {
  print(message) {
    MissionUtils.Console.print(message)
  }

  printMoney(money) {
    this.print(GUIDE_MESSAGE.insertMoney)
    this.print(money)
  }

  printTickets(tickets) {
   this.print(`${tickets}${GUIDE_MESSAGE.totalTickets}`)
  }

  printLotto(lottos) {
    lottos.forEach(lotto => this.print(`[${lotto.join(', ')}]`))
  }

  printWinningNumbers(numbers) {
    this.print(GUIDE_MESSAGE.insertWinnerNumbers)
    this.print(`${numbers.join(',')}`)
  }

  printBonus(bonusNumber) {
    this.print(GUIDE_MESSAGE.insertBonusNumber)
    this.print(bonusNumber)
  }

  printStats() {
    this.print(GUIDE_MESSAGE.winningStats)
    this.print(GUIDE_MESSAGE.divider)
  }

  printRate(profit) {
    this.print(GUIDE_MESSAGE.winningStatistics.replace('*', profit * 100))
  }
}

export default Output;