import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto";
import { MESSAGES } from "../constant/Constant";

class LottoModel {
  async inputAmount() {
    while (true) {
      const purchaseAmount = await Console.readLineAsync(
        MESSAGES.INPUT_AMOUNT_MESSAGE
      );
      if (purchaseAmount % 1000 === 0) {
        return parseInt(purchaseAmount, 10);
      } else {
        Console.print(`[ERROR] ${MESSAGES.INVALID_AMOUNT_MESSAGE}`);
      }
    }
  }

  async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_WINNING_MESSAGE
    );
    const winningNumbersArray = winningNumbers.split(",").map(Number);

    const bonusNumber = await Console.readLineAsync(
      MESSAGES.INPUT_BONUS_MESSAGE
    );
    const parsedBonusNumber = parseInt(bonusNumber, 10);

    return {
      winningNumbers: winningNumbersArray,
      bonusNumber: parsedBonusNumber,
    };
  }

  generateLotto(ticketCount) {
    const lottoTickets = [];
    for (let i = 0; i < ticketCount; i++) {
      const ticketNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedTicketNumbers = ticketNumbers.sort((a, b) => a - b);
      const lottoTicket = new Lotto(sortedTicketNumbers);
      lottoTickets.push(lottoTicket);
    }

    Console.print("\n로또 티켓을 생성했습니다:");
    lottoTickets.forEach((ticket) => {
      Console.print(`[${ticket.getNumbers().join(", ")}]`);
    });

    return lottoTickets;
  }

  checkLottoTickets(lottoTickets, winningNumbers, bonusNumber) {
    const winning = {
      1: { count: 0, prize: 2000000000 },
      2: { count: 0, prize: 30000000 },
      3: { count: 0, prize: 1500000 },
      4: { count: 0, prize: 50000 },
      5: { count: 0, prize: 5000 },
    };

    for (const ticket of lottoTickets) {
      const ticketNumbers = ticket.getNumbers();
      const matchingNumbers = ticketNumbers.filter((number) =>
        winningNumbers.includes(number)
      );

      switch (matchingNumbers.length) {
        case 6:
          winning[1].count++;
          break;
        case 5:
          if (ticketNumbers.includes(bonusNumber)) {
            winning[2].count++;
          } else {
            winning[3].count++;
          }
          break;
        case 4:
          winning[4].count++;
          break;
        case 3:
          winning[5].count++;
          break;
      }
    }

    return winning;
  }
}

export default LottoModel;
