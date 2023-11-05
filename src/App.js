import View from "./View.js";

class App {
  view;
  price;

  constructor() {
    this.view = new View();
  }

  async play() {
    const INPUT = await this.view.getPrice();
  }
}

export default App;
