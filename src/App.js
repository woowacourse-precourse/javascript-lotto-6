import GameContoller from './controllers/GameController.js'

class App {
  async play() {
    const game = new GameContoller();
    await game.play();
  }
}

export default App;
