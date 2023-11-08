import IssuedLottInfo from '../info/IssuedLottoInfo.js';
import ProfitRatioInfo from '../info/profitRatioInfo.js';
import WinningStatisticsInfo from '../info/WinningStatisticsInfo.js';

const display = {
  issedLottoInfo: ({ count, lottos }) => {
    const info = new IssuedLottInfo({ count, lottos });
    info.printInfoMessage();
  },

  winningStatisticsInfo: ({ lottoGenerator, lottoNumbers, bonusNumber }) => {
    const info = new WinningStatisticsInfo({
      lottoGenerator,
      lottoNumbers,
      bonusNumber,
    });
    info.printInfoMessage();
  },

  profitRatioInfo: ({ amount, totalProfit }) => {
    const info = new ProfitRatioInfo({
      amount,
      totalProfit,
    });
    info.printInfoMessage();
  },
};

export default display;
