import { Console, Random } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import Lotto from "./Lotto.js";

const validate = new Validate();
class App {
  LottoList = [];
  prizeNumber = [];

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

      selectedNumber = lotto.sortLottoList();
      this.LottoList.push(selectedNumber);
      Console.print(selectedNumber);
    }
  }

  async inputPrizeNumber() {
    const number = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");

    const stringList = number.split(",");
    this.prizeNumber = stringList.map((data) => Number(data));
  }

  async play() {
    const lottoCount = await this.start();
    Console.print(lottoCount + "개를 구매했습니다.");

    this.getLottoList(lottoCount);

    await this.inputPrizeNumber();
  }
}

export default App;
