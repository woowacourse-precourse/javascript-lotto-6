import Lotto from "./Lotto.js";
import lottoPriceInput from "./LottoPriceInput.js";

class App {
  async play() {
    const price = await lottoPriceInput("구입금액을 입력해 주세요.");
    console.log(price);
  }
}

const app = new App();
app.play();
export default App;
