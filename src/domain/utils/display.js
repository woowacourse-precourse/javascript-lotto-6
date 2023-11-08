import IssuedLottInfo from '../info/IssuedLottoInfo.js';
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
};

export default display;
