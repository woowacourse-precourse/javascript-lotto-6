import { MissionUtils } from "@woowacourse/mission-utils";
import { TICKET_CONFIGURATION } from "./Rule.js";

class LottoNumberGenerator {

  static generate() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      TICKET_CONFIGURATION.startRange,
      TICKET_CONFIGURATION.endRange,
      TICKET_CONFIGURATION.quantity
    );
  }

  static isValidLottoNumber(number) {
    if(number < TICKET_CONFIGURATION.startRange || number > TICKET_CONFIGURATION.endRange) {
        return false;
    }
    return true;
  }

  static isValidNumberQuantity(numbers) {
    if(numbers.length != TICKET_CONFIGURATION.quantity) {
        return false;
    }
    return true;
  }
}

export default LottoNumberGenerator;
