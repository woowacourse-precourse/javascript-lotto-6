import { MissionUtils } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE, WINNING_RESULT_DETAILS } from "../constants/constants";

class Output {
  print(message) {
    MissionUtils.Console.print(message)
  }

  printTickets(tickets) {
   this.print(`${tickets}${GUIDE_MESSAGE.totalTickets}`)
  }

  printLotto(lottos) {
    lottos.forEach(lotto => this.print(`[${lotto.join(', ')}]`))
  }

  printStats(STATS) {
    this.print(GUIDE_MESSAGE.winningStats)
    this.printDivider();

    Object.keys(WINNING_RESULT_DETAILS).map((name, idx) => {
      this.print(`${WINNING_RESULT_DETAILS[name]}${STATS[4 - idx]}개`)
    })
  }

  printRate(profit) {
    this.print(GUIDE_MESSAGE.winningStatistics.replace('*', (profit * 100).toFixed(1)))
  }

  printDivider() {
    this.print(GUIDE_MESSAGE.divider)
  }
}

export default Output;