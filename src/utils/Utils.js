import { Random } from "@woowacourse/mission-utils"
import Statics from "../static/Statics.js"

const Utils = {
  calculateMaxPurchasableLotto(money) {
    return Math.floor(parseInt(money) / 1000)
  },
  
  generateLottoNumberArray(number) {
    return Array(number).fill(null).map(() => {
      return Random.pickUniqueNumbersInRange(
        Statics.lotto.condition.low, 
        Statics.lotto.condition.high, 
        Statics.lotto.condition.digit, 
      );
    })
  },

  
}


export default Utils;