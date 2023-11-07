import { Random } from "@woowacourse/mission-utils";

class MyLotto {
  #lottoList;

  constructor(output) {
    this.#lottoList = [];
    this.Output = output;
  }

  generateLottoTicketFromRandomNumbers() {
    const lottoNumber = new Set();
    while (lottoNumber.size < 6) {
      lottoNumber.add(Random.pickNumberInRange(1, 45));
    }
    const lottoTicket = Array.from(lottoNumber).sort((a, b) => a - b);
    this.setMyLottoList(lottoTicket);
  }

  buyLottoTicket(lottoTicketCount) {
    for (let cnt = 0; cnt < lottoTicketCount; cnt += 1) {
      this.generateLottoTicketFromRandomNumbers();
    }
  }

  setMyLottoList(lottoTicket) {
    this.Output.printResult(lottoTicket);
    this.#lottoList.push(lottoTicket);
  }

  getMyLottoList() {
    return this.#lottoList;
  }
}

export default MyLotto;
