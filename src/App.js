import Controller from './model/Controller.js';

class App {
  async play() {
    const app = new Controller();
    await app.inputPurchase();
    await app.inputWinNumber();
    await app.inputBonus();
    await app.run();
  }
}

export default App;
