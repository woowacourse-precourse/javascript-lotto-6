import GameController from "./Controller/GameController.js";

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async play() {
    try {
      await this.gameController.init();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
