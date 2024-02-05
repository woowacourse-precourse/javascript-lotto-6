import LottoTicketGenerator from './LottoTicketGenerator.js';
import LottoPlayer from './LottoPlayer.js';

class DongHangLottery {
  async play() {
    const lotto = new LottoTicketGenerator();
    console.log('lotto.makeLotto();', lotto.makeLotto());

    const player = new LottoPlayer(10000);

  }
}

export default DongHangLottery;
