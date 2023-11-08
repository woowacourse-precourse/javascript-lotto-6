import IssuedLottInfo from '../info/IssuedLottoInfo.js';
import WinningStatisticsInfo from '../info/WinningStatisticsInfo.js';

const display = {
  issedLottoInfo: ({ count, lottos }) => {
    const info = new IssuedLottInfo({ count, lottos });
    info.printInfoMessage();
  },

  winningStatisticsInfo: ({ lottoGenerator, lotto, bonus }) => {
    const info = new WinningStatisticsInfo({ lottoGenerator, lotto, bonus });
    info.printInfoMessage();
  },
};

export default display;
