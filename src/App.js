import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const SUM_OF_PURCHASE = await this.inputAmount();

    if (SUM_OF_PURCHASE % 1000 !== 0) {
      Console.print("[ERROR] 1,000원 단위로 입력하세요.");
      return;
    }

    const TICKET_COUNT = SUM_OF_PURCHASE / 1000;
    Console.print(`\n${TICKET_COUNT}개를 구매했습니다.`);

    const LOTTO_TICKETS = this.generateLotto(TICKET_COUNT);
    const { WINNING_NUMBERS, BONUS_NUMBER } =
      await this.INPUT_WINNING_NUMBERS();

    const WINNING = this.CHECK_LOTTO_TICKETS(
      LOTTO_TICKETS,
      WINNING_NUMBERS,
      BONUS_NUMBER
    );

    this.SHOW_WINNING(WINNING, TICKET_COUNT);
  }

  async inputAmount() {
    while (true) {
      const SUM_OF_PURCHASE = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      if (SUM_OF_PURCHASE % 1000 === 0) {
        return parseInt(SUM_OF_PURCHASE, 10);
      } else {
        Console.print("[ERROR] 1,000원 단위로 입력하세요.");
      }
    }
  }
  async INPUT_WINNING_NUMBERS() {
    const WINNING_NUMBERS = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const WINNING_NUMBERS_ARRAY = WINNING_NUMBERS.split(",").map(Number);

    const BONUS_NUMBER = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    const PARSED_BONUS_NUMBER = parseInt(BONUS_NUMBER, 10);

    return {
      WINNING_NUMBERS: WINNING_NUMBERS_ARRAY,
      BONUS_NUMBER: PARSED_BONUS_NUMBER,
    };
  }

  generateLotto(TICKET_COUNT) {
    const LOTTO_TICKETS = [];
    for (let i = 0; i < TICKET_COUNT; i++) {
      const TICKET_NUMBER = Random.pickUniqueNumbersInRange(1, 45, 6);
      const SORTED_TICKET_NUMBER = TICKET_NUMBER.sort((a, b) => a - b);
      const LOTTO_TICKET = new Lotto(SORTED_TICKET_NUMBER);
      LOTTO_TICKETS.push(LOTTO_TICKET);
    }

    Console.print("\n로또 티켓을 생성했습니다:");
    LOTTO_TICKETS.forEach((ticket) => {
      Console.print(`[${ticket.getNumbers().join(", ")}]`);
    });

    return LOTTO_TICKETS;
  }
}

export default App;
