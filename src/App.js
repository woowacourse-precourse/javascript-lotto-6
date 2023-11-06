import { Console, Random } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import Lotto from "./Lotto.js";

const validate = new Validate();
class App {
  inputPrice = 0;
  LottoList = [];
  prizeNumber = [];
  bonusNumber = 0;
  resultList = [
    { rank: 5, count: 0, price: 5000, describe: "3개 일치 (5,000원) - " },
    { rank: 4, count: 0, price: 50000, describe: "4개 일치 (50,000원) - " },
    {
      rank: 3,
      count: 0,
      price: 1500000,
      describe: "5개 일치 (1,500,000원) - ",
    },
    {
      rank: 2,
      count: 0,
      price: 30000000,
      describe: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    },
    {
      rank: 1,
      count: 0,
      price: 2000000000,
      describe: "6개 일치 (2,000,000,000원) - ",
    },
  ];

  async start() {
    this.inputPrice = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    validate.priceValidate(this.inputPrice);

    return this.inputPrice / 1000;
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

    Console.print("당첨 통계\n---");
    this.resultList.map((result) =>
      Console.print(result.describe + result.count + "개")
    );
  }

  getProfitRate() {
    let profitRate = 0;
    let sum = 0;
    this.resultList.map((result) => (sum += result.price * result.count));

    profitRate = ((sum / this.inputPrice) * 100).toFixed(1);
    Console.print("총 수익률은 " + profitRate + "%입니다.");
  }

  async play() {
    const lottoCount = await this.start();
    Console.print(lottoCount + "개를 구매했습니다.");

    this.getLottoList(lottoCount);

    await this.inputPrizeNumber();
    await this.inputBonusNumber();

    this.printWinningDetail();
    this.getProfitRate();
  }
}

export default App;
