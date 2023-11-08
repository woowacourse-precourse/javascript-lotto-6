import Money from "../src/Money.js";
import BuyLotto from "../src/BuyLotto.js";
import Lotto from "../src/Lotto.js";
import BonusLotto from "../src/BonusLotto.js";
import MatchLottoNumber from "../src/MatchLottoNumber.js";
import { INPUTMESSAGES } from "./util/Message.js";
import { MONEY_CONSTANTS } from "./util/constants.js";
const { LOTTO_PRICE, WINNINGS_OUTPUTS } = MONEY_CONSTANTS;
import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
class App {
  lottoCount = 0;

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
      const moneys = await Console.readLineAsync(INPUTMESSAGES.MONEY);
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
      `3개 일치 (${WINNINGS_OUTPUTS[4]}원) - ${moneys.getRankingCounts[4]}개`
    );
    Console.print(
      `4개 일치 (${WINNINGS_OUTPUTS[3]}원) - ${moneys.getRankingCounts[3]}개`
    );
    Console.print(
      `5개 일치 (${WINNINGS_OUTPUTS[2]}원) - ${moneys.getRankingCounts[2]}개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${WINNINGS_OUTPUTS[1]}원) - ${moneys.getRankingCounts[1]}개`
    );
    Console.print(
      `6개 일치 (${WINNINGS_OUTPUTS[0]}원) - ${moneys.getRankingCounts[0]}개`
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

  purchaseListOutput(number, lottos) {
    Console.print(`${number}개를 구매했습니다.`);
    lottos.map((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  async start() {
    // 돈 입력
    const moneys = await this.moneyInput();
    this.lottoCount = moneys.getMoney / LOTTO_PRICE;
    // 입력된 돈으로 로또 구매
    const buyLotto = new BuyLotto(this.lottoCount);
    buyLotto.buyLottos();
    this.purchaseListOutput(this.lottoCount, buyLotto.getBoughtLotto);
    // 당첨 번호, 보너스 번호 입력
    const lotto = await this.lottoInput();
    const bonusLotto = await this.bonusLottoInput(await lotto.getNumbers);
    // 당첨 번호, 보너스 번호, 구매한 로또, 구매한 로또 개수를 통해 당첨 통계 계산
    const matchLottoNumber = new MatchLottoNumber(
      lotto.getNumbers,
      bonusLotto.getBonusNumbers,
      buyLotto.getBoughtLotto,
      this.lottoCount
    );
    moneys.rankingMoney(matchLottoNumber.getRank);
    this.lottoResultOutput(moneys);
  }

  async play() {
    await this.start();
  }
}

export default App;
