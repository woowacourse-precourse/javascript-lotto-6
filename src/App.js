import Input from './view/Input.js';
import Output from './view/Output.js';
import Game from './Game.js';
import User from './User.js';

class App {
  #input;
  #output;
  #game;

  constructor() {
    this.#input = new Input();
    this.#output = new Output();
    this.#game = new Game();
  }

  async setUserMoney(user) {
    while (true) {
      try {
        const userMoney = await this.#input.userMoney();
        user.setMoney(Number(userMoney));
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  setLottoTickets(user) {
    const tickets = this.#game.purchaseLottoTickets(user.getMoney());
    user.setTickets(tickets);
  }

  async setWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.#input.winningNumbers();
        this.#game.setWinningNumbers(winningNumbers);
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  async setBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await this.#input.bonusNumbers();
        this.#game.setBonusNumber(Number(bonusNumber));
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  async setGameConditions(user) {
    await this.setUserMoney(user);
    this.setLottoTickets(user);

    this.#output.lottoTickets(user.getTickets());

    await this.setWinningNumbers();
    await this.setBonusNumber();
  }

  async play() {
    const user = new User();
    await this.setGameConditions(user);

    const result = this.#game.calculateGameResults(user.getTickets(), user.getMoney());
    this.#output.gameResult(result);
  }
}

export default App;
