import MainController from "./MainController.js";

class App {
  async play() {
    const game = new MainController();
    await game.start();
  }
}

export default App;
