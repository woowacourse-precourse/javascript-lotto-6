import LottoInput from "./LottoInput";
import LottoOutput from "./LottoOutput";

class App {
  async play() {
    const lottoPrice = await LottoInput.racingCarInput();
    const lottoCnt = LottoOutput.printLottoCnt();
  }
}

export default App;
