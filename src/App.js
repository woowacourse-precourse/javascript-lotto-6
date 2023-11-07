import InputView from './view/inputView.js';
import LottoGame from './domain/LottoGame.js';
class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }
  async play() {
    //Input : 구입 금액을 입력받기
    const purchaseMoney = await InputView.readPurchaseMoney();
    console.log('  1️⃣   purchaseMoney', purchaseMoney);

    // 로또 발행 후 발행한 로또 수량 및 번호 출력하기
    this.lottoGame.generateLottoTickets(purchaseMoney);

    this.lottoGame.consoleField();

    // Input : 당첨 번호 입력받기
    const winningNumber = await InputView.readWinningNumber();
    console.log('2️⃣   winningNumber', winningNumber);

    //Input : 보너스 번호 입력받기
    const bonusNumber = await InputView.readBonusNumber(winningNumber);
    console.log('3️⃣   bonusNumber', bonusNumber);

    this.lottoGame.setWinningNumbers(winningNumber, bonusNumber);

    this.lottoGame.consoleField();

    //[당첨 내역, 수익률] 계산

    //[당첨 내역, 수익률] 출력하기
  }
}

export default App;
