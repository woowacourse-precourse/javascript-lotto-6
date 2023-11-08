import Money from "../src/Money.js";
import BuyLotto from "../src/BuyLotto.js";
import Lotto from "../src/Lotto.js";
import BonusLotto from "../src/BonusLotto.js";
import MatchLottoNumber from "../src/MatchLottoNumber.js";
import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
class App {
  moneyList = ["5,000", "50,000", "1,500,000", "30,000,000", "2,000,000,000"];
  logs = [
    "3개 일치 (5,000원) - 1개",
    "4개 일치 (50,000원) - 0개",
    "5개 일치 (1,500,000원) - 0개",
    "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
    "6개 일치 (2,000,000,000원) - 0개",
    "총 수익률은 62.5%입니다.",
  ];
  async purchaseList(number, lottos) {
    await Console.print(`${number}개를 구매했습니다.`);
    lottos.map((lotto) => {
      Console.print(lotto);
    });
  }
  async winningNumberInput() {
    const winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    const winningNumber = await winningNumbers.split(",");
    return winningNumber;
  }

  async bonusNumberInput() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    return bonusNumber;
  }

  async moneyInput() {
    try {
      const moneys = await Console.readLineAsync("구입금액을 입력해 주세요.");
      const money = await new Money(moneys);
      return money;
    } catch (e) {
      Console.print(e.message);
      return await this.moneyInput();
    }
  }
  async lottoInput() {
    try {
      const winningNumber = await this.winningNumberInput();
      const lotto = new Lotto(winningNumber);
      return lotto;
    } catch (e) {
      Console.print(e.message);
      return await this.lottoInput();
    }
  }
  async bonusLottoInput(number) {
    try {
      const bonusNumber = await this.bonusNumberInput();
      const bonusLotto = new BonusLotto(number, bonusNumber);
      return bonusLotto;
    } catch (e) {
      Console.print(e.message);
      return await this.bonusLottoInput(number);
    }
  }
  async start() {
    //구입 금액 입력
    const moneys = await this.moneyInput();
    const lottoCount = (await moneys?.getMoney) / 1000;

    const buyLotto = new BuyLotto(lottoCount);
    buyLotto.buyLottos();
    this.purchaseList(lottoCount, buyLotto.getBoughtLotto);
    //당첨 번호 입력
    const lotto = await this.lottoInput();
    //보너스 번호 입력
    const bonusLotto = await this.bonusLottoInput(await lotto.getNumbers);
    //당첨 통계
    const matchLottoNumber = new MatchLottoNumber(
      lotto.getNumbers,
      bonusLotto.getBonusNumbers,
      buyLotto.getBoughtLotto,
      lottoCount
    );
    moneys.rankingMoney(matchLottoNumber.getRank);

    // for (let i = 0; i < 5; i++) {
    Console.print(
      `3개 일치 (${this.moneyList[0]}원) - ${moneys.getRankingCounts[4]}개`
    );
    Console.print(
      `4개 일치 (${this.moneyList[1]}원) - ${moneys.getRankingCounts[3]}개`
    );
    Console.print(
      `5개 일치 (${this.moneyList[2]}원) - ${moneys.getRankingCounts[2]}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${this.moneyList[3]}원) - ${moneys.getRankingCounts[1]}개`
    );
    Console.print(
      `6개 일치 (${this.moneyList[4]}원) - ${moneys.getRankingCounts[0]}개`
    );

    const price = ((moneys.getWinningMoney / moneys.getMoney) * 100).toFixed(1);
    Console.print(`총 수익률은 ${price}%입니다.`);
  }
  async play() {
    await this.start();
  }
}

export default App;
