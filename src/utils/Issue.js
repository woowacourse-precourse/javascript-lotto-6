import { Random } from "@woowacourse/mission-utils";
import SET_LOTTO from "../constants/lotto.js";

class Issue{

  #min
  #max
  #number

  constructor(){
    this.#max = SET_LOTTO.lotto.max
    this.#min = SET_LOTTO.lotto.min
    this.#number = SET_LOTTO.lotto.number
  }

  issueLotto(){
    const lotto = Random.pickUniqueNumbersInRange(this.#min, this.#max, this.#number);

    return lotto.sort((a, b) => a - b)
  }

}

export default Issue