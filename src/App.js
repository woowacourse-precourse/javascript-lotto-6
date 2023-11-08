import { InputConsole } from "./view/inputConsole";
import { Game } from "./Game";

class App {
  async play() {

    const price = await InputConsole.inputPrice();
    const winningNumbers = await InputConsole.inputWinningNumberList();
    const bonusNumber = await InputConsole.inputBonusNumber();

    const game = new Game(price, winningNumbers, bonusNumber);

    game.start();

  }
}

export default App;
