import GameController from "./controllers/GameController.js";

class App {


  async play() {
    const gameController = new GameController();
    await gameController.gameStart();
  }
}

const app = new App();
await app.play();

export default App;
