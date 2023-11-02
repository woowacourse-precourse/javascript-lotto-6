import { Message } from './Message.js';
import { Validate } from './Validate.js';

class App {
  async play() {
    const money = await Message.inputPurchasingAmount();
    Validate.purchasingMoney(money);
  }
}

export default App;
