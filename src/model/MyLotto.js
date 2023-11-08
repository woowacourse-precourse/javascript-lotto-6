import { Random } from "@woowacourse/mission-utils";
import LOTTO_CONSTANT from "../utils/constant";

class MyLotto {
  #lottoList;

  constructor(output) {
    this.#lottoList = [];
    this.Output = output;
  }

  generateLottoTicketFromRandomNumbers() {
    const lottoTicket = Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANT.minNumber,
      LOTTO_CONSTANT.maxNumber,
      LOTTO_CONSTANT.numberCount,
    );
    this.setMyLottoList(lottoTicket);
  }

  buyLottoTicket(lottoTicketCount) {
    for (let cnt = 0; cnt < lottoTicketCount; cnt += 1) {
      this.generateLottoTicketFromRandomNumbers();
    }
  }

  setMyLottoList(lottoTicket) {
    this.Output.printResult(`[${lottoTicket.join(", ")}]`);
    this.#lottoList.push(lottoTicket);
  }

  getMyLottoList() {
    return this.#lottoList;
  }
}

export default MyLotto;
