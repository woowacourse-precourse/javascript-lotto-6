import LottoTicketGenerator from './LottoTicketGenerator.js';
import LottoPlayer from './LottoPlayer.js';
import LottoMachine from './LottoMachine.js';

class DongHangLottery {
  async play() {

    const player = new LottoPlayer();
    player.setSeed();

    // const lottoMachine = new LottoMachine();
    // const lotto = new LottoTicketGenerator();
    // console.log('lotto.makeLotto();', lotto.makeLotto());

    // const lottoList = [
    //   [8, 21, 23, 41, 42, 43],
    //   [3, 5, 11, 16, 32, 38],
    //   [7, 11, 16, 35, 36, 44],
    //   [1, 2, 3, 7, 5, 6],
    //   [1, 8, 11, 31, 41, 42],
    //   [13, 14, 16, 38, 42, 45],
    //   [7, 11, 30, 40, 42, 43],
    //   [2, 13, 22, 32, 38, 45],
    //   [1, 3, 5, 14, 22, 45],
    //   [1, 2, 3, 4, 5, 6]
    // ];

    // lottoList.forEach(item => {
    //   console.log('로또 당철 등수', lottoMachine.checkLotto(item));
    // });
  }
}

export default DongHangLottery;
