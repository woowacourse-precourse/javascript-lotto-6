import DongHangLottery from './DongHangLottery/DongHangLottery.js';
import LottoTicketGenerator from './DongHangLottery/LottoTicketGenerator.js';

class App {
  async play() {
    const Lotto = new DongHangLottery();
    await Lotto.play();
  }
}

export default App;
