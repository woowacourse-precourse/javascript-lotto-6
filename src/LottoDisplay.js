import { Console } from "@woowacourse/mission-utils";

const PRIZE_MESSAGES = {
  "5등": "3개 일치 (5,000원)",
  "4등": "4개 일치 (50,000원)",
  "3등": "5개 일치 (1,500,000원)",
  "2등": "5개 일치, 보너스 볼 일치 (30,000,000원)",
  "1등": "6개 일치 (2,000,000,000원)",
};

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
      const formattedTicket = `[${ticket.join(", ")}]`;
      Console.print(formattedTicket);
    });
  }

  displayResults(winningCounts, rateOfReturn) {
    Console.print("당첨 통계");
    Console.print("---");
    Object.keys(PRIZE_MESSAGES).forEach((rank) => {
      Console.print(`${PRIZE_MESSAGES[rank]} - ${winningCounts[rank]}개`);
    });
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default LottoDisplay;
