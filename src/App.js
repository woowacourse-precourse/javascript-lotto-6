import UserInput from './view/userInput.js';
import Purchase from './controller/Purchase.js';
import Calculate from './model/Calculate.js';

class App {
  constructor() {
    this.UserInput = new UserInput();
  }

  async play() {
    const amount = await this.UserInput.RequestAmount();

    const purchase = new Purchase(amount);
    const arrays = purchase.public();

    const numbers = await this.UserInput.RequestNumbers();

    const bonus = await this.UserInput.RequestBonus(numbers);
    const calculate = new Calculate(amount, numbers, arrays, bonus);
    const count = calculate.count();
    const collected = calculate.collect(count);

    console.log(calculate.rate(collected));
  }
}

export default App;
