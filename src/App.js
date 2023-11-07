import GameController from './Models/GameController';

class App {
  #gameController = new GameController();

  async play() {
    const lottos = await this.#gameController.purchaseLotto();
    await this.#gameController.generateWinningNumbers();
    this.#gameController.printResult(lottos);
  }
}

export default App;
