import { Console, Random } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import Lotto from "./Lotto.js";

const validate = new Validate();
class App {
  LottoList = [];
  prizeNumber = [];
  bonusNumber = 0;

  async start() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    validate.priceValidate(price);

    return price / 1000;
  }

  getLottoList(count) {
    let selectedNumber = [];
    for (let i = 0; i < count; i++) {
      selectedNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(selectedNumber);

      this.LottoList.push(lotto.sortLottoList());
      this.printLottoList();
    }
  }

  printLottoList() {
    this.LottoList.map((lotto) => Console.print(lotto));
  }

  async inputPrizeNumber() {
    const prize = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");

    const stringList = prize.split(",");
    this.prizeNumber = stringList.map((data) => Number(data));
  }

  async inputBonusNumber() {
    const bonus = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");

    this.bonusNumber = Number(bonus);
  }

  async play() {
    const lottoCount = await this.start();
    Console.print(lottoCount + "개를 구매했습니다.");

    this.getLottoList(lottoCount);

    await this.inputPrizeNumber();
    await this.inputBonusNumber();
  }
}

export default App;
