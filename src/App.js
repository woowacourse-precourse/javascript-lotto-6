/* eslint-disable max-lines-per-function */
import PlayLottery from './Controller/Play.js';

class App {
  constructor() {
    this.PlayLottery = new PlayLottery();
  }

  async play() {
    await this.PlayLottery.draw();
  }
}

export default App;
