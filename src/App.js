import LottoGame from './domain/LottoGame.js';
import LottoGameService from './service/LottoGameService.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame();
    this.lottoGameService = new LottoGameService(this.lottoGame);
  }

  async play() {
    // user에게 로또게임을 위한 구입 금액받기
    // 로또를 발행하기
    await this.lottoGameService.getInputAndGenerateLottoTickets();
    // 발행된 로또의 갯수와 번호를 출력하기
    this.lottoGameService.printLottoTickets();
    // user에게 당첨번호와 보너스 번호 입력받기
    await this.lottoGameService.userInputAndSetWinningNumbers();
    // 당첨내역 및 수익률 계산하기
    this.lottoGameService.calculateWinningResult();
    // 당첨내역 및 수익률 출력하기
    this.lottoGameService.printWinningResult();
  }
}

export default App;
