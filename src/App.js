import OutputHandler from './OutputHandler';
import User from './User';
import LottoMachine from './LottoMachine';

class App {
  async play() {
    const user = new User();
    const machine = new LottoMachine(ticketCount);

    const ticketCount = await user.purchaseLotto();
    OutputHandler.printPurchaseComplete(ticketCount);

    const tickets = await machine.getTickets(ticketCount);

    const checker = new LottoChecker();
  }
}

export default App;
