import LottoInput from "./Controller/LottoInput";
import LottoOutput from "./Controller/LottoOutput";

class App {
  constructor() {
    this.lottoInput = new LottoInput();
    this.lottoOutput = new LottoOutput();
  }

  async play() {
    const money = await this.lottoInput.priceInput();
    this.lottoOutput.lottoCnt(money);

    const winningNum = await this.lottoInput.winningInput();
    const bonusNum = await this.lottoInput.bonusInput();

    this.lottoOutput.printWinning(winningNum, bonusNum);
    this.lottoOutput.printRate(money);
  }
}

export default App;
