import Lotto from "./Lotto.js";
const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");

class App {
  constructor() {
    this.LOTTO_PRICE = 1000;
    this.WINNING_MONEY = [0, 0, 5000, 50000, 1500000, 30000000, 2000000000];
    this.NUMBER_RANGE = [1, 45];
    this.NUMBER_COUNT = 6;
    this.purchaseAmount = 0;
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.lottos = [];
    this.winningResult = [0, 0, 0, 0, 0, 0, 0];
    
  async play() {}
}

export default App;
