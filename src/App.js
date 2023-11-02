import Lotto from './Lotto.js';
import UserInput from './view/userInput.js';

class App {

  constructor() {
    this.UserInput = new UserInput();
  }
  
  async play() {
    const amount = await this.UserInput.amount();
    this.lotto = new Lotto(amount);
    this.lotto.print();
  }
}

export default App;
