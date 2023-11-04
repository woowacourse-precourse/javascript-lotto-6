import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGame {
  #ticketCount;
  #lottoTickets;
  constructor() {
    this.#ticketCount;
    this.#lottoTickets = [];
  }

  async start() {
    await this.buyLotto();
    this.setLottoTickets(this.#lottoTickets, this.#ticketCount);
  }

  setTicketCount(count) {
    this.#ticketCount = count;
  }

  async buyLotto() {
    const inputPrice = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');

    const tempPrice = Number(inputPrice);
    this.#validateCost(tempPrice);
    const termTicketCount = tempPrice / 1000;
    this.setTicketCount(termTicketCount);
  }

  #validateCost(price) {
    if (price <= 0) {
      throw new Error("[ERROR] 구입 가능한 금액이 입력되지 않았습니다.")
    }
    if (isNaN(price)) {
      throw new Error("[ERROR] 구입 금액이 숫자가 아닙니다.")
    }
    if (!Number.isInteger(price)) {
      throw new Error("[ERROR] 구입 금액이 정수가 아닙니다.")
    }
    if (price % 1000 !== 0) {
      throw new Error("[ERROR] 금액이 1,000원으로 나누어 떨어지지 않습니다.")
    }
  }


  generateLottoNumbers(ticketCount) {
    const lotto = [];
    while (lotto.length < 6) {
      var number = Random.pickNumberInRange(1, 45);
      if (!lotto.includes(number)) {
        lotto.push(number);
      }
    }
    const lottoTicket = new Lotto(lotto);
    return lottoTicket;
  }

  setLottoTickets(lottoTickets, count) {
    while (lottoTickets.length < count) {
      const lottoNumbers = this.generateLottoNumbers();
      lottoTickets.push(lottoNumbers);
      
    }
  }
  
}

export default LottoGame;
