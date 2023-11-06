import { Console, Random } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import Lotto from "./Lotto.js";

const validate = new Validate();
class App {
  LottoList = [];
  prizeNumber = [];
  bonusNumber = 0;
  resultList = [
    { rank: 1, count: 0, price: 2000000000 },
    { rank: 2, count: 0, price: 30000000 },
    { rank: 3, count: 0, price: 1500000 },
    { rank: 4, count: 0, price: 50000 },
    { rank: 5, count: 0, price: 5000 },
  ];

  async start() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    validate.priceValidate(price);

    return price / 1000;
  }

  getLottoList(count) {
    for (let i = 0; i < count; i++) {
      const selectedNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(selectedNumber);
      const sortedList = lotto.sortLottoList();

      this.LottoList.push(sortedList);
      this.printLottoList(sortedList);
    }
  }

  printLottoList(list) {
    const numberList = list.join(", ");
    Console.print("[" + numberList + "]");
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

  printWinningDetail() {
    this.LottoList.map((lotto) => {
      new Lotto(lotto).getWinningList(
        this.prizeNumber,
        this.resultList,
        this.bonusNumber
      );
    });
  }

  async play() {
    const lottoCount = await this.start();
    Console.print(lottoCount + "개를 구매했습니다.");

    this.getLottoList(lottoCount);

    await this.inputPrizeNumber();
    await this.inputBonusNumber();

    this.printWinningDetail();
  }
}

export default App;
