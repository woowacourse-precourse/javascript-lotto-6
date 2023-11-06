/* eslint-disable max-lines-per-function */
import PlayLottery from './Controller/playLottery.js';

class App {
  constructor() {
    this.PlayLottery = new PlayLottery();
  }

  async play() {
    await this.PlayLottery.getLotteryResult();

    // Console.print(
    //   `총 수익률은 ${parseFloat(
    //     ((getMoneyAmount / payAmount) * 100).toFixed(2)
    //   )}%입니다.`
    // );
  }
}

export default App;
