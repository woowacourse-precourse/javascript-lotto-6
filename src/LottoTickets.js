const { Random } = require("@woowacourse/mission-utils");

class LottoTickets {
  generateLottoTickets(lottoTicket) {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumbers.sort((a, b) => a - b);
    lottoTicket.push(lottoNumbers);
    return lottoTicket;
  }
}

export default LottoTickets;
