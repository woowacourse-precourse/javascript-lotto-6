import Input from './Input.js';
import Output from './Output.js';
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

  async getUserPurchaseMoney(user) {
    while (true) {
      try {
        const userMoney = await this.#input.userMoney();
        user.setMoney(userMoney);
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  async getWinningNumbers() {
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

  async getBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await this.#input.bonusNumbers();
        this.#game.setBonusNumber(bonusNumber);
        break;
      } catch (err) {
        this.#output.error(err.message);
      }
    }
  }

  async play() {
    const user = new User();

    await this.getUserPurchaseMoney(user);
    this.#game.purchaseLottoTickets(user);

    this.#output.lottoTicketCount(user.getTickets());
    this.#output.lottoTicketNumbers(user.getTickets());

    await this.getWinningNumbers();
    await this.getBonusNumber();

    const results = this.#game.calculateWinningResult(user.getTickets());
    const totalReturn = this.#game.calculateTotalReturn(
      results,
      user.getMoney()
    );

    this.#output.winningResult(results);
    this.#output.totalReturnResult(totalReturn);
  }
}

export default App;
