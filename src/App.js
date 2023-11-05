import GameController from './application/controller/GameController.js';

class App {
  async play() {
    const GAME_CONTROLLER = new GameController();
    await GAME_CONTROLLER.start();
  }
}

export default App;
