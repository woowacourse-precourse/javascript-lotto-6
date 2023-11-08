import LottoCenter from './LottoCenter.js';
import LottoGameHost from './LottoGameHost.js';
import LottoStore from './LottoStore.js';
import { print } from '../utility/console.js';
import {
  LOTTO_CONSTANT,
  LOTTO_RANK,
  FORMATTER,
  MESSAGE,
} from '../constant/constant.js';

class LottoGame {
  lottoStore = null;
  lottoGameHost = null;
  lottoCenter = null;

  constructor() {
    this.lottoStore = new LottoStore();
    this.lottoGameHost = new LottoGameHost();
  }

  async buyAndIssueLottos() {
    await this.lottoStore.setLottoStore();
    this.lottoCenter = new LottoCenter(this.lottoStore.publishLottos());
    this.lottoCenter.tryPrintAllLottoNumbers();
  }

  printResults(lottoResultsList) {
    LOTTO_CONSTANT.reverseRankList.forEach((rank) => {
      const matchedNumber = LOTTO_RANK[rank].matchedNumber;
      const bonudNumberText = LOTTO_RANK[rank].bonudNumberText;
      const reward = LOTTO_RANK[rank].rewardText;
      const count = lottoResultsList[rank];

      print(
        FORMATTER.resultsPrintFormatter(
          matchedNumber,
          bonudNumberText,
          reward,
          count,
        ),
      );
    });
  }

  getAndPrintResults() {
    this.lottoCenter.inspectLottoWinningStatus(
      this.lottoGameHost.getWinningNumbers(),
      this.lottoGameHost.getBonusNumber(),
    );

    const lottoResultsList = this.lottoCenter.getLottoResultsList();
    print(MESSAGE.titleForResults);
    this.printResults(lottoResultsList);
  }

  calculateReturnRate(money, lottoResultsList) {
    let rewardSum = 0;
    LOTTO_CONSTANT.reverseRankList.forEach((rank) => {
      const reward = LOTTO_RANK[rank].reward;
      const count = lottoResultsList[rank];
      rewardSum += reward * count;
    });

    const returnRate = (rewardSum / money) * LOTTO_CONSTANT.percentageFactor;
    return returnRate.toFixed(LOTTO_CONSTANT.roundingDigit);
  }

  printReturnRate(returnRate) {
    print(FORMATTER.returnRateFormatter(returnRate));
  }

  getAndPrintReturnRate(lottoResultsList) {
    const returnRate = this.calculateReturnRate(
      this.lottoStore.getMoney(),
      lottoResultsList,
    );
    this.printReturnRate(returnRate);
  }
  
  async playLottoGame() {
    await this.buyAndIssueLottos();

    await this.lottoGameHost.setLottoWinningNumbers();

    this.getAndPrintResults();
    this.getAndPrintReturnRate(this.lottoCenter.getLottoResultsList());
  }
}

export default LottoGame;