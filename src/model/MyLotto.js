import { Random } from "@woowacourse/mission-utils";
import LOTTO_CONSTANT from "../utils/constant";

class MyLotto {
  #lottoList;

  constructor(output) {
    this.#lottoList = [];
    this.Output = output;
  }

  generateLottoTicketFromRandomNumbers() {
    const lottoNumber = new Set();
    while (lottoNumber.size < LOTTO_CONSTANT.numberCount) {
      lottoNumber.add(
        Random.pickNumberInRange(
          LOTTO_CONSTANT.minNumber,
          LOTTO_CONSTANT.maxNumber,
        ),
      );
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
