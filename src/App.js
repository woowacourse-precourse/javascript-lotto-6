import LottoPrinter from './LottoPrinter';
import LottoPlayer from './LottoPlayer';
import LottoMachine from './LottoMachine';
import LottoChecker from './LottoChecker';

class App {
  async play() {
    const player = new LottoPlayer();
    const machine = new LottoMachine(ticketCount);

    const ticketCount = await player.purchaseLotto();
    LottoPrinter.printPurchaseComplete(ticketCount);

    const tickets = await machine.getTickets(ticketCount);
    const winningNumbers = await player.enterWinningNumbers();

    const checker = new LottoChecker(tickets, winningNumbers);
    const result = checker.getResult();
  }
}

export default App;
