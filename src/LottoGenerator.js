import { Console, Random } from "@woowacourse/mission-utils";
import {
  LOTTO_NUMBERS_COUNT,
  LOTTO_NUMBER_END,
  LOTTO_NUMBER_START,
  LOTTO_PRICE,
} from "./utils/lottoConstants.js";

class LottoGenerator {
  async getMoneyFromUserInput() {
    Console.print("구입금액을 입력해 주세요.");
    const money = await Console.readLineAsync("");
    return parseInt(money, 10);
  }

  calculateNumberOfLotto(money) {
    return money / LOTTO_PRICE;
  }

  generateSingleLottoTicket() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_START,
      LOTTO_NUMBER_END,
      LOTTO_NUMBERS_COUNT
    );
  }

  displayNumberOfTickets(numberOfLotto) {
    Console.print(`${numberOfLotto}개를 구매했습니다.`);
  }

  displayLottoTickets(lottoTickets) {
    lottoTickets.forEach((ticket) => {
      Console.print(ticket);
    });
  }

  async getLottoTickets() {
    const money = await this.getMoneyFromUserInput();
    const numberOfLotto = this.calculateNumberOfLotto(money);
    const lottoTickets = [];

    this.displayNumberOfTickets(numberOfLotto);

    for (let i = 0; i < numberOfLotto; i += 1) {
      const lottoTicket = this.generateSingleLottoTicket();
      lottoTickets.push(lottoTicket);
    }

    this.displayLottoTickets(lottoTickets);

    return lottoTickets;
  }
}

export default LottoGenerator;
