import Input from './view/input.js';

class App {
  async play() {
    const amount = await Input.amountToBuy();
  }
}

export default App;
