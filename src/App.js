import { InputConsole } from "./view/inputConsole";
import { MissionUtils, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
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
