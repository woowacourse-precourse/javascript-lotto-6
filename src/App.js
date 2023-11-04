import View from './View/View.js';

class App {
  #view = new View();

  async play() {
    await this.setGameConfig();
  }

  async setGameConfig() {
    const purchasePrice = await this.readGameConfig();
  }

  async readGameConfig() {
    const purchasePrice = this.#view.readPurchasePrice();
    return purchasePrice;
  }
}

export default App;
