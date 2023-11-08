import User from './User';

class App {
  #player

  constructor() {}

  async play() {
    this.#player = new User();
    await this.#player.setPurchaseAmount();
  }
};

export default App;
