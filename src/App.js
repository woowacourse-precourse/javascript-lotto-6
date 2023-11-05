import GameController from './Controller/GameController';

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async play() {
    this.gameController.play();
  }
}

export default App;
