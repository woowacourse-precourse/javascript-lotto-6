import Input from './Input.js';
import Output from './Output.js';
import Util from './Util.js';

class App {
  async play() {
    const lottoBudget = await Input.getLottoBudget();
    Output.printPurchase(Util.calculatePurchaseCount(lottoBudget));
  }
}

export default App;
