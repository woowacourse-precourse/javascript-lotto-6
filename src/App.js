import LottoPrinter from './LottoPrinter';
import User from './User';
import LottoMachine from './LottoMachine';
import LottoChecker from './LottoChecker';

class App {
  async play() {
    const user = new User();
    const machine = new LottoMachine(ticketCount);

    const ticketCount = await user.purchaseLotto();
    LottoPrinter.printPurchaseComplete(ticketCount);

    const tickets = await machine.getTickets(ticketCount);
    const winningNumbers = await user.enterWinningNumbers();

    const checker = new LottoChecker(tickets, winningNumbers);
    const result = checker.getResult();
  }
}

export default App;
