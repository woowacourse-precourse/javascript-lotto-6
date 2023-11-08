import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
const WINNING_PRICE = [5000, 50000, 1500000, 30000000, 2000000000];
const MAX_NUMBER = 45;
const MIN_NUMBER = 1;
const PRICE_UNIT = 1000;

class App {
  async play() {
    let price;
    let winning_number;
    let bonus_number;
    let input;

    //구매금액 입력
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    while (true) {
      try {
        input = await MissionUtils.Console.readLineAsync();
        check_number_format(input);
        check_multiple_of_price_unit(input);
        price = input;
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        continue;
      }
    }

    // 발행한 로또 수량 및 랜덤 번호를 출력
    const tickets = produce_ticket(parseInt(price) / 1000);
    tickets.forEach((ticket) =>
      MissionUtils.Console.print(`[${ticket.get_numbers().join(", ")}]`)
    );

    //당첨번호 입력
    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    while (true) {
      try {
        input = await MissionUtils.Console.readLineAsync();
        winning_number = new Lotto(input.split(",").map(Number));
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        continue;
      }
    }

    //보너스 번호 입력
    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    while (true) {
      try {
        input = await MissionUtils.Console.readLineAsync();
        check_number_format(input);
        check_number_in_range(parseInt(input));
        bonus_number = parseInt(input);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        continue;
      }
    }

    //로또들 당첨액 출력
    const total_profit_rate = (check_winning_price() / price) * 100;
    MissionUtils.Console.print(
      `총 수익률은 ${total_profit_rate
        .toFixed(2)
        .replace(/\.?0+$/, "")}%입니다.`
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
    function check_number_format(input) {
      if (isNaN(input)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
    function check_multiple_of_price_unit(input) {
      if (parseInt(input) % PRICE_UNIT != 0 || parseInt(input) < PRICE_UNIT) {
        throw new Error(`[ERROR] ${PRICE_UNIT}원 단위로 입력해 주세요`);
      }
    }
    function check_number_in_range(input) {
      if (input < MIN_NUMBER || input > MAX_NUMBER) {
        throw new Error("[ERROR] 1~45까지의 번호를 입력해 주세요");
      }
    }

    // 랜덤로또 생산
    function produce_ticket(ticket_count) {
      MissionUtils.Console.print(`${ticket_count}개를 구매했습니다.`);
      let tickets = [];
      for (let i = 0; i < ticket_count; i++) {
        tickets.push(new Lotto());
      }
      return tickets;
    }
  }
}

export default App;
