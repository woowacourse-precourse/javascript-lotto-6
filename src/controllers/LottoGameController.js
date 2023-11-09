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

  static matchRank(customerNumbers, winningNumbers, bonusNumber) {
    const matchCounts = Array(Conditions.TOTAL_RANK).fill(Conditions.INITIAL_MATCH_COUNT);
    for (let i = 0; i < customerNumbers.length; i += 1) {
      const matchCount = this.matchCount(customerNumbers[i], winningNumbers);
      const isBonusMatch = customerNumbers[i].includes(bonusNumber);
      switch (matchCount) {
        case 6: matchCounts[Conditions.FIRST] += Conditions.COUNT; break;
        case 5 && isBonusMatch: matchCounts[Conditions.SECOND] += Conditions.COUNT; break;
        case 5: matchCounts[Conditions.THIRD] += Conditions.COUNT; break;
        case 4: matchCounts[Conditions.FOURTH] += Conditions.COUNT; break;
        case 3: matchCounts[Conditions.FIFTH] += Conditions.COUNT; break;
        default: break;
      }
    }
    return matchCounts;
  }

  static matchCount(customerNumber, winningNumbers) {
    return customerNumber.filter(number => winningNumbers.includes(number)).length;
  }
  
}

export default LottoGameController;