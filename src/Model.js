import { Random } from "@woowacourse/mission-utils"

const DIGIT = 6
const CONDITION = [1,45,6]
const model = {
  calculateMaximumLotto(money) {
    return Math.floor(parseInt(money) / 1000)
  },
  generateLottoNumberArray(number) {
    return Array(number).fill(null).map(() => {
      return Random.pickUniqueNumbersInRange(...CONDITION);
    })
  },
}

export default model;