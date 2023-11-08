import Background from './Background.js';
import Controls from './Controls.js';

class App {
  #background;
  #bet;
  #lottos;

  constructor() {
    this.#background = new Background();
    this.#bet = 0;
    this.#lottos = [];
  }

  async play() {
    // issue lottery tickets
    this.#bet = await Controls.getBet();
    [this.#bet, this.#lottos] = this.#background.issueLottos(this.#bet);
    Controls.printLottos(this.#lottos);

    // set winning numbers
    let [win, bonus] = await Controls.writeWin();
    this.#background.setNumbers(win);
    this.#background.setBonus(bonus);

    // print statistics
    let [matchCounter, rate] = this.#background.calcStatistics(this.#lottos);
    Controls.printStatistics(matchCounter, rate);
  }
}

export default App;
