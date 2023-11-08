import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_LENGTH } from "../src/constants/constants.js";

class LottoTickets {
  generateLottoTickets(numberOfTickets) {
    const lottoTickets = [];

    for (let i = 0; i < numberOfTickets; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_LENGTH.LOTTO_MIN_NUMBER,
        LOTTO_LENGTH.LOTTO_MAX_NUMBER,
        LOTTO_LENGTH.LOTTO_LENGTH
      );
      lottoNumbers.sort((a, b) => a - b);
      lottoTickets.push(lottoNumbers);
    }

    return lottoTickets;
  }
}

export default LottoTickets;
