import { Random } from "@woowacourse/mission-utils";
import Conditions from "../constants/Conditions.js";

class LottoGameController {
  static generateCustomerNumbers(lottoCount) {
    const customerNumbers = [];
    for (let i = 0; i < lottoCount; i += 1) {
      const temp = Random.pickUniqueNumbersInRange(
        Conditions.NUMBER_MIN, 
        Conditions.NUMBER_MAX,
        Conditions.NUMBER_PICK_COUNT);
      this.sortInAscendingOrder(temp);
      customerNumbers.push(temp);
    }
    return customerNumbers;
  }

  static sortInAscendingOrder(userNumbers) {
    userNumbers.sort((a, b) => a - b);
  }
}

export default LottoGameController;