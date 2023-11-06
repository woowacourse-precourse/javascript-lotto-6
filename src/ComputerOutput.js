import { Random, Console } from '@woowacourse/mission-utils';
import Input from './UserInput.js';
import Lotto from './Lotto.js';

class Output {
  static ticketPrint(purchaseAmount) {
    const numOfTickets = purchaseAmount / 1000;
    const lottoTickets = [];

    for (let i = 0; i < numOfTickets; i++) {
      const numbers = Lotto.createRandomNumbers().sort((a, b) => a - b);
      lottoTickets.push(numbers);
    }

    Console.print(`\n${numOfTickets}개를 구매했습니다.`);
    lottoTickets.forEach(ticket => {
      Console.print(ticket);
    });
  }


}

export default Output;