import OutputHandler from './OutputHandler';
import User from './User';
import LottoMachine from './LottoMachine';
import InputHandler from './InputHandler';
import LottoChecker from './LottoChecker';

class App {
  async play() {
    const user = new User();
    const machine = new LottoMachine(ticketCount);

    const ticketCount = await user.purchaseLotto();
    OutputHandler.printPurchaseComplete(ticketCount);

    const tickets = await machine.getTickets(ticketCount);
    const winningNumbers = await InputHandler.inputWinningNumbers();

    const checker = new LottoChecker(tickets, winningNumbers);
    const result = checker.getResult();
  }
}

export default App;
