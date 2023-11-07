import { Console } from "@woowacourse/mission-utils";
import Game from "./Game";

class App {
  #game;

  async play() {
    this.#game = new Game();
    await this.#getMoney();
    this.#game.printLottos();
    await this.#getChoiceNumbers();
    await this.#getBonusNumber();
    this.#game.getResult();
  }

  async #getMoney() {
    while (true) {
      try {
        await this.#game.getMoney();
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getChoiceNumbers() {
    while (true) {
      try {
        await this.#game.getChoiceNumbers();
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getBonusNumber() {
    while (true) {
      try {
        await this.#game.getBonusNumber();
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
