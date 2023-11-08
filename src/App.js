import Output from './Output.js';
import UserInput from './UserInput.js';
import Validate from './Validate.js';

class App {
  Output = new Output();

  Input = new UserInput();

  Validate = new Validate();
  
  amonut;

  async play() {
    return this.getLottoCount()
  }

  async getLottoCount () {
    this.Output.printPurchaseAmonut()
    this.money = await this.Input.amountInput()
    this.Validate.DivisibleBy1000(this.money)
    this.amonut = this.money / 1000
  }
}

export default App;
