import { Console } from "@woowacourse/mission-utils";

class LottoDisplay {
  requestMoneyInput() {
    Console.print("구입금액을 입력해 주세요.");
    return Console.readLineAsync("");
  }

  requestWinningNumbersInput() {
    Console.print(
      "당첨 번호 6개를 입력해 주세요. 번호는 쉼표(,)를 기준으로 구분합니다"
    );
    return Console.readLineAsync("");
  }

  requestBonusNumberInput() {
    Console.print("보너스 번호를 입력해 주세요.");
    return Console.readLineAsync("");
  }

  displayError(message) {
    Console.print(message);
  }

  displayNumberOfTickets(numberOfLotto) {
    Console.print(`${numberOfLotto}개를 구매했습니다.`);
  }

  displayLottoTickets(lottoTickets) {
    lottoTickets.forEach((ticket) => {
      Console.print(ticket);
    });
  }
}

export default LottoDisplay;
