import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const price = await MissionUtils.Console.readLineAsync();
    check_number(price);
    if (parseInt(price) % 1000 != 0) {
      throw new Error("[ERROR] 천원 단위로 입력해 주세요");
    }
    const ticket_num = parseInt(price);
    // 발행한 로또 수량 및 번호를 출력
    MissionUtils.Console.print(`${ticket_num}장을 구매했습니다.`);
    const tickets = produce_ticket(ticket_num);

    //당첨번호, 보너스 번호 입력
    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    const input = await MissionUtils.Console.readLineAsync();
    const winning_number = input.split(",").map((number) => parseInt(number));
    winning_number.map((number) => {
      check_number(number);
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1~45까지의 번호를 입력해 주세요");
      }
    });

    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    const bonus_number = await MissionUtils.Console.readLineAsync();
    check_number(bonus_number);

    function check_number(input) {
      if (isNaN(input)) {
        throw new Error("[ERROR] 숫자를 입력해주세요");
      }
    }

    function produce_ticket(ticket) {
      const tickets = [];
      for (let i = 0; i < ticket; i++) {
        tickets.push(
          MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
            (a, b) => a - b
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
