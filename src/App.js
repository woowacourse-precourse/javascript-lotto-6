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
  moneys;
  buyLotto;
  matchLottoNumber;

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
      this.moneys = money;
      this.lottoCount = this.moneys.getMoney / LOTTO_PRICE;
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

  buyListOutput(number, lottos) {
    Console.print(`${number}개를 구매했습니다.`);
    lottos.map((lotto) => {
      Console.print(`[${lotto.join(", ")}]`);
    });
  }

  buyLottos() {
    this.buyLotto = new BuyLotto(this.lottoCount);
    this.buyLotto.buyLottos();
    this.buyListOutput(this.lottoCount, this.buyLotto.getBoughtLotto);
  }

  async start() {
    await this.moneyInput();
    this.buyLottos();
    const lotto = await this.lottoInput();
    const bonusLotto = await this.bonusLottoInput(await lotto.getNumbers);
    // 당첨 번호, 보너스 번호, 구매한 로또, 구매한 로또 개수를 통해 당첨 통계 계산
    const matchLottoNumber = new MatchLottoNumber(
      lotto.getNumbers,
      bonusLotto.getBonusNumbers,
      this.buyLotto.getBoughtLotto,
      this.lottoCount
    );
    this.moneys.rankingMoney(matchLottoNumber.getRank);
    this.lottoResultOutput(this.moneys);
  }

  async play() {
    await this.start();
  }
}

export default App;
