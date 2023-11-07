import {MissionUtils} from "@woowacourse/mission-utils";
import InputHandler from "./InputHandler.js";
import OutputHandler from "./OutputHandler.js";
import LottoPurchase from "./LottoPurchase.js";
import LottoStatistics from "./LottoStatistics.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    try {
      // 구입 금액
      const purchaseAmount = await InputHandler.getPurchaseAmount();
      const lottoPurchase = new LottoPurchase(purchaseAmount);
      lottoPurchase.purchase();

      const purchasedLottos = lottoPurchase.getLottos();

      // 구매한 로또 티켓 출력
      OutputHandler.numberOfLottoPurchase(purchasedLottos);

      // 당첨 번호와 보너스 번호 입력 받기
      const winningNumbers = await InputHandler.getWinningNumbers();
      const bonusNumber = await InputHandler.getBonusNumbers(winningNumbers);

      const lottoStatistics = new LottoStatistics(winningNumbers, bonusNumber, Lotto.PRICE);
      lottoStatistics.calculate(purchasedLottos);
      const statistics = lottoStatistics.getStatistics();

      // 당첨 통계 출력하기
      OutputHandler.winningStatistics(statistics);

      // 수익률 계산하기
      const profitRate = lottoStatistics.calculateProfitRate(purchasedLottos);
      // 수익률 출력하기
      OutputHandler.totalProfitRate(profitRate);

    } catch (error) {
      console.error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
