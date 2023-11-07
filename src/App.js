import LottoInput from "./Controller/LottoInput";
import LottoOutput from "./Controller/LottoOutput";

class App {
  constructor() {
    this.lottoInput = new LottoInput();
    this.lottoOutput = new LottoOutput();
  }

  async play() {
    const money = await this.lottoInput.priceInput();
    const count = this.lottoOutput.lottoCnt();
  }
}

export default App;
