import Game from "./Game";

class App {
  async play() {
    const game = new Game();

    const lottoCnt = await game.getInputLoop(game.getUserMoney);

  }
}

export default App;
