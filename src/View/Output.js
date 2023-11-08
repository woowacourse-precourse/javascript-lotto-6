import { Console } from "@woowacourse/mission-utils";

class Output {
  printPurchaseQuantity(LottoQuantity) {
    Console.print(`${LottoQuantity}개를 구매했습니다.`);
  }

  printLottoTickets(lottoTickets) {
    lottoTickets.forEach((ticket) => {
      Console.print(ticket);
    });
  }
}

export default Output;
