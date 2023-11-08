import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import InputManager from "./InputManager.js";
import LottoPurchaser from "./LottoPurchaser.js";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.lottos = null;
    this.winningNumbers = null;
    this.bonusNumber = null;
  }
  calculateRateOfReturn(winningStatistics, ticketCount) {
    const totalPrizeMoney =
      winningStatistics[1] * 2000000000 +
      winningStatistics[2] * 50000000 +
      winningStatistics[3] * 1500000 +
      winningStatistics[4] * 50000 +
      winningStatistics[5] * 5000;

    const totalInvestment = ticketCount * 1000;

    return ((totalPrizeMoney - totalInvestment) / totalInvestment) * 100 + 100;
  }

  async play() {
    const price = await InputManager.inputPrice();
    const generatedLottoNumbers = LottoPurchaser.lottoList(price);

    for (const lottoTicket of generatedLottoNumbers) {
      lottoTicket.sort((a, b) => a - b);
      Console.print(`[${lottoTicket.join(", ")}]`);
    }
    this.winningNumbers = await InputManager.getWinningNumbers();

    this.bonusNumber = await InputManager.getBonusNumbers();

    const myLotto = new Lotto(this.winningNumbers);

    const winningStatistics = LottoPurchaser.checkWinningStatus(
      this.winningNumbers,
      this.bonusNumber,
      generatedLottoNumbers
    );

    Console.print("당첨 통계:\n---");
    Console.print(`3개 일치 (5,000원) - ${winningStatistics[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${winningStatistics[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningStatistics[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStatistics[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winningStatistics[1]}개`);

    const rateOfReturn = this.calculateRateOfReturn(
      winningStatistics,
      price / 1000
    );
    Console.print(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다.`);
  }
}

export default App;
