import Controller from './Controller/Controller.js';

class App {
  async play() {
    const controller = new Controller();
    await controller.handlePurchaseAmount();
  }
}

export default App;
