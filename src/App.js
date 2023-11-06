import AmountInput from "./View/AmountInput";
import CalculateLottoNumber from "./View/CalculateLottoNumber";
class App {
  async play() {
    const lottoList = [];
    const amount = AmountInput();
    const lottoNumber = CalculateLottoNumber(amount);
  }
}

export default App;
