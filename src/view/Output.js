import { MissionUtils } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE, WINNING_RESULT_DETAILS } from "../constants/constants.js";

class Output {
  print(message) {
    MissionUtils.Console.print(message)
  }

  printStats(STATS) {
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

  printError(message) {
    MissionUtils.Console.print(`${message}`)
  }
}

export default Output;