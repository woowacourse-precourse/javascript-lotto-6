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
}

export default LottoNumberGenerator;
