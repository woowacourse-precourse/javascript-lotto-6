import { MissionUtils } from "@woowacourse/mission-utils";

class LottoTickets {
  generateLottoTickets(numberOfTickets) {
    const lottoTickets = [];

    for (let i = 0; i < numberOfTickets; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottoNumbers.sort((a, b) => a - b);
      lottoTickets.push(lottoNumbers);
    }

    return lottoTickets;
  }
}

export default LottoTickets;
