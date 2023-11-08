import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
const WINNING_PRICE = [5000, 50000, 1500000, 30000000, 2000000000];
const PRICE_UNIT = 1000;

const INPUT = ["8000", "1,2,3,4,5,6", "7"];

class App {
  async play() {
    //구매금액 입력
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    let price;
    while (true) {
      let input = await MissionUtils.Console.readLineAsync();
      if (is_not_number(input)) {
        continue;
      }
      if (is_not_multiple_of_priceunit(input)) {
        continue;
      }
      price = input;
      break;
    }

    // 발행한 로또 수량 및 번호를 출력
    const ticket_num = parseInt(price) / 1000;
    MissionUtils.Console.print(`${ticket_num}개를 구매했습니다.`);
    //랜덤 로또 생산, 출력
    const tickets = produce_ticket(ticket_num);

    tickets.forEach((ticket) =>
      MissionUtils.Console.print(`[${ticket.get_numbers().join(", ")}]`)
    );

    //당첨번호 입력
    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    const input = await MissionUtils.Console.readLineAsync();
    // const input = INPUT[1];
    const winning_number = new Lotto(input.split(",").map(Number));

    //보너스 번호 입력
    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    const bonus_number = await MissionUtils.Console.readLineAsync();
    // const bonus_number = INPUT[2];
    check_number(bonus_number);

    //로또들 당첨 총액 확인
    //총 수익률은 62.5%입니다.
    MissionUtils.Console.print(
      `총 수익률은 ${(check_winning_price() / price) * 100}%입니다.`
    );

    function check_winning_price() {
      let result = 0;
      let sum_of_result = 0;
      const winning_count = [0, 0, 0, 0, 0];

      tickets.forEach((ticket) => {
        result = ticket.get_price(winning_number, bonus_number);
        if (result == WINNING_PRICE[0]) {
          winning_count[0] += 1;
        } else if (result == WINNING_PRICE[1]) {
          winning_count[1] += 1;
        } else if (result == WINNING_PRICE[2]) {
          winning_count[2] += 1;
        } else if (result == WINNING_PRICE[3]) {
          winning_count[3] += 1;
        } else if (result == WINNING_PRICE[4]) {
          winning_count[4] += 1;
        }
        sum_of_result += result;
      });
      MissionUtils.Console.print(
        `3개 일치 (${WINNING_PRICE[0].toLocaleString()}원) - ${
          winning_count[0]
        }개`
      );
      MissionUtils.Console.print(
        `4개 일치 (${WINNING_PRICE[1].toLocaleString()}원) - ${
          winning_count[1]
        }개`
      );
      MissionUtils.Console.print(
        `5개 일치 (${WINNING_PRICE[2].toLocaleString()}원) - ${
          winning_count[2]
        }개`
      );
      MissionUtils.Console.print(
        `5개 일치, 보너스 볼 일치 (${WINNING_PRICE[3].toLocaleString()}원) - ${
          winning_count[3]
        }개`
      );
      MissionUtils.Console.print(
        `6개 일치 (${WINNING_PRICE[4].toLocaleString()}원) - ${
          winning_count[4]
        }개`
      );
      return sum_of_result;
    }

    //숫자 확인 함수
    function is_not_number(input) {
      if (isNaN(input)) {
        console.log("[ERROR] 숫자가 잘못된 형식입니다.");
        return true;
      }
      return false;
    }
    function is_not_multiple_of_priceunit(input) {
      if (parseInt(input) % PRICE_UNIT != 0 || parseInt(input) < PRICE_UNIT) {
        console.log(`[ERROR] ${PRICE_UNIT}원 단위로 입력해 주세요`);
        return true;
      }
      return false;
    }

    // 랜덤로또 생산
    function produce_ticket(ticket) {
      let tickets = [];
      for (let i = 0; i < ticket; i++) {
        tickets.push(new Lotto());
      }
      return tickets;
    }
  }
}

export default App;
