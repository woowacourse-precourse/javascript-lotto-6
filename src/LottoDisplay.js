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
      const formattedTicket = `[${ticket.join(", ")}]`;
      Console.print(formattedTicket);
    });
  }

  displayResults(winningCounts, rateOfReturn) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${winningCounts["5등"]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningCounts["4등"]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningCounts["3등"]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningCounts["2등"]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winningCounts["1등"]}개`);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default LottoDisplay;
