import Game from "./Game";

class App {
  async play() {
    const game = new Game();
    await game.getMoney();
    game.printLottos();
    await game.getChoiceNumbers();
    await game.getBonusNumber();
    game.getResult();
  }
}

export default App;
