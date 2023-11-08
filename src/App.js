//import Lotto from "./Lotto.js";
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

  async play() {
    try {
      await this.inputPurchaseAmount();
      this.publishLottos();
      this.printLottos();
      await this.inputWinningNumbers();
      await this.inputBonusNumber();
      this.calculateWinningResult();
      this.printWinningResult();
    } catch (error) {
      Console.print(error.message);
    }
  }
  
}

async function inputPurchaseAmount() {
  const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  const amount = Number(input);
  if (amount % this.LOTTO_PRICE !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
  }
  this.purchaseAmount = amount;
}

function publishLottos() {
  const lottoCount = this.purchaseAmount / this.LOTTO_PRICE;
  for (let i = 0; i < lottoCount; i++) {
    const numbers = Random.pickUniqueNumbersInRange(
      this.NUMBER_RANGE[0],
      this.NUMBER_RANGE[1],
      this.NUMBER_COUNT
    );
    const lotto = new Lotto(numbers);
    this.lottos.push(lotto);
  }
}

function printLottos() {
  Console.print(`${this.lottos.length}개를 구매했습니다.`);
  for (const lotto of this.lottos) {
    const numbers = lotto.getNumbers().sort((a, b) => a - b);
    Console.print(`[${numbers.join(", ")}]`);
  }
}
async function inputWinningNumbers() {
  const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
  const numbers = input.split(",").map((number) => Number(number));
  if (numbers.length !== this.NUMBER_COUNT) {
    throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
  }
  for (const number of numbers) {
    this.validateNumber(number);
  }
  this.winningNumbers = numbers;
}


export default App;
