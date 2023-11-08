import Money from "../src/Money.js";
import BuyLotto from "../src/BuyLotto.js";
import Lotto from "../src/Lotto.js";
import BonusLotto from "../src/BonusLotto.js";
import MatchLottoNumber from "../src/MatchLottoNumber.js";
import { INPUTMESSAGES } from "./util/Message.js";

import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
class App {
  moneyList = ["5,000", "50,000", "1,500,000", "30,000,000", "2,000,000,000"];

  async winningNumberInput() {
    const winningNumbers = await Console.readLineAsync(
      INPUTMESSAGES.WINNING_NUMBER
    );
    const winningNumber = await winningNumbers.split(",");
    return winningNumber;
  }

  async bonusNumberInput() {
    const bonusNumber = await Console.readLineAsync(INPUTMESSAGES.BONUS_NUMBER);
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

  winningStatisticsOutput(moneys) {
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
  }

  returnOutput(moneys) {
    const price = ((moneys.getWinningMoney / moneys.getMoney) * 100).toFixed(1);
    Console.print(`총 수익률은 ${price}%입니다.`);
  }

  lottoResultOutput(moneys) {
    this.winningStatisticsOutput(moneys);
    this.returnOutput(moneys);
  }

  async purchaseListOutput(number, lottos) {
    await Console.print(`${number}개를 구매했습니다.`);
    lottos.map((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  async start() {
    const moneys = await this.moneyInput();
    const lottoCount = moneys.getMoney / 1000;

    const buyLotto = new BuyLotto(lottoCount);
    buyLotto.buyLottos();
    this.purchaseListOutput(lottoCount, buyLotto.getBoughtLotto);

    const lotto = await this.lottoInput();
    const bonusLotto = await this.bonusLottoInput(await lotto.getNumbers);

    const matchLottoNumber = new MatchLottoNumber(
      lotto.getNumbers,
      bonusLotto.getBonusNumbers,
      buyLotto.getBoughtLotto,
      lottoCount
    );
    moneys.rankingMoney(matchLottoNumber.getRank);
    this.lottoResultOutput(moneys);
  }

  async play() {
    await this.start();
  }
}

export default App;
