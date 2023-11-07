import OutputHandler from './OutputHandler';
import User from './User';

class App {
  async play() {
    const user = new User();
    const ticketCount = await user.purchaseLotto();
    OutputHandler.printPurchaseComplete(ticketCount);
  }
}

export default App;
