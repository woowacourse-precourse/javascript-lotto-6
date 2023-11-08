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
    this.#bet = await Controls.getBet();
    [this.#bet, this.#lottos] = this.#background.issueLottos(this.#bet);

    Controls.printLottos(this.#lottos);
  }
}

export default App;
