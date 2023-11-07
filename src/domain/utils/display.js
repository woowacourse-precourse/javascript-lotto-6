import IssuedLottInfo from '../info/IssuedLottoInfo.js';

const display = {
  issedLottoInfo: ({ count, lottos }) => {
    const info = new IssuedLottInfo({ count, lottos });
    info.printInfoMessage();
  },
};

export default display;
