import GameController from "./controllers/GameController.js";

class App {
  constructor(){
    this.gameController = new GameController();
  }

  async play() {
    this.gameController.gameStart();
  }
}

const app = new App();
await app.play();

export default App;
