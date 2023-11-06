import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
const GET_INPUT_MONEY = "구입금액을 입력해 주세요.\n";
const GET_INPUT_LOTTO = "당첨 번호를 입력해 주세요.\n";
const GET_INPUT_BONUS = "보너스 번호를 입력해 주세요.\n";
const ERROR_GET_INPUT_MONEY =
  "[ERROR] 구입금액은 1000원 단위로 입력하셔야 합니다.";
const ERROR_GET_INPUT_BONUS = "[ERROR] 보너스 입력 형식이 틀렸습니다.";
const COUNTS_MESSAGE = "개를 구매했습니다.";
class App {
  async play() {
    const money = await this.getMoney();
    const randomLottos = this.generateRandomLotto(money);
    const randomBonus = this.generateBonus();
    const lotto = await this.getUserLotto();
    const bonus = await this.getUserBonus(lotto);
    this.getCount(lotto, randomLottos);
    // const result = await this.doLotto();
    // await this.printLottoWinner(result);
  }

  async getMoney() {
    const moneyInput = await Console.readLineAsync(GET_INPUT_MONEY);
    if (this.moneyCheck(moneyInput)) return moneyInput;
  }
  async moneyCheck(moneyInput) {
    if (moneyInput % 1000 !== 0) throw Error(ERROR_GET_INPUT_MONEY);
    return Console.print("");
  }
  async getUserLotto() {
    const lottoNumber = await Console.readLineAsync(GET_INPUT_LOTTO);
    const userLotto = new Lotto(lottoNumber.split(","));
    return userLotto;
  }
  async getUserBonus(lotto) {
    const bonus = await Console.readLineAsync(GET_INPUT_BONUS);
    if ((bonus > 45 || bonus < 1)||lotto.indexOf(bonus)!==-1) throw Error(ERROR_GET_INPUT_BONUS);
    return bonus;
  }
  async generateRandomLotto(moneyInput) {
    const counts = moneyInput / 1000;
    const randomLottos = [];
    Array.from({length:counts}).map(()=>{
      const random = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomLottos.push({ number: random, count: 0 });
    })
    this.printCounts(counts);
    this.printRandomLotto(randomLottos);
    return randomLottos;
  }
  async generateBonus() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 1);
  }
  printCounts(counts) {
    Console.print(counts + COUNTS_MESSAGE);
  }
  printRandomLotto(lotto) {
    lotto.map((random) => Console.print(random.number));
    Console.print("");
  }
  getCount(lotto, randomLottos) {
    const scoreLottos = [];
    console.log(typeof(randomLottos))
    // Array.from(randomLottos, (random) => {
    //   random.count = random.number.filter((same) =>
    //     lotto.includes(same.number)
    //   ).length;
    //   console.log("dho", random.count);
    // });
    scoreLottos=randomLottos.map((random)=>{random.count=random.number.filter((same)=>lotto.includes(same.number).length);console.log("!")})
    // randomLottos.map((random)=>console.log(random.count + random.number))
    return randomLottos;
  }
}
export default App;
