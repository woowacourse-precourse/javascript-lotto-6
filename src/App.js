import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

class App {
  async play() {
    const WINNING_PRICE = [5000, 50000, 1500000, 30000000, 2000000000];
    const PRICE_UNIT = 1000;

    let winning_score = [0, 0, 0, 0, 0];

    //구매금액 입력
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const price = await MissionUtils.Console.readLineAsync();
    check_number(price);
    if (parseInt(price) % PRICE_UNIT != 0) {
      throw new Error(`[ERROR] ${PRICE_UNIT}원 단위로 입력해 주세요`);
    }

    // 발행한 로또 수량 및 번호를 출력
    const ticket_num = parseInt(price);
    MissionUtils.Console.print(`${ticket_num}장을 구매했습니다.`);
    const tickets = produce_ticket(ticket_num);

    //당첨번호 입력
    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    const input = await MissionUtils.Console.readLineAsync();
    const winning_number = new Lotto(input.split(",").map(Number));

    //보너스 번호 입력
    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    const bonus_number = await MissionUtils.Console.readLineAsync();
    check_number(bonus_number);

    function check_number(input) {
      if (isNaN(input)) {
        throw new Error("[ERROR] 숫자를 입력해주세요");
      }
    }

    //로또 결과 계산
    tickets.forEach((ticket) => {});

    //랜덤로또 생산
    function produce_ticket(ticket) {
      const tickets = [];
      for (let i = 0; i < ticket; i++) {
        tickets.push(
          new Lotto(
            MissionUtils.Random.pickUniqueNumbersInRange(
              MIN_NUMBER,
              MAX_NUMBER,
              LOTTO_LENGTH
            ).sort((a, b) => a - b)
          )
        );
      }
      const combinedString = tickets
        .map((ticket) => "[" + ticket.join(", ") + "]")
        .join("\n");
      MissionUtils.Console.print(combinedString);
      return tickets;
    }
  }
}

export default App;
