import { userInput } from './User.js';
import User from './User.js';

class App {
  async play() {
    const purchaseAmount = await userInput();
    const user = new User(purchaseAmount);
  }
}

export default App;
