import Lotto from "./Lotto.js";
import lottoPriceInput from "./LottoPriceInput.js";
import priceCheck from "./priceCheck.js";

class App {
  async play() {
    const price = await lottoPriceInput("구입금액을 입력해 주세요.");
    const purchase = priceCheck(price);
    const lotto = new Lotto();
    console.log(lotto.randomNumber());
  }
}

const app = new App();
app.play();
export default App;
