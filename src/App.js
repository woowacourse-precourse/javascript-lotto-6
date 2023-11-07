import OutputHandler from './OutputHandler';
import User from './User';
import LottoMachine from './LottoMachine';

class App {
  async play() {
    const user = new User();
    const machine = new LottoMachine(ticketCount);

    const ticketCount = await user.purchaseLotto();
    OutputHandler.printPurchaseComplete(ticketCount);

    await machine.getTickets(ticketCount);
    console.log(machine.getTickets);
  }
}

export default App;
