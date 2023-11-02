import Lotto from "./Lotto.js";
import lottoPriceInput from "./LottoPriceInput.js";
import priceCheck from "./priceCheck.js";
import randomNumber from "./randomNumber.js";
class App {
  async play() {
    const price = await lottoPriceInput("구입금액을 입력해 주세요.");
    const purchase = priceCheck(price);
    const lotto = new Lotto(randomNumber());
    console.log(lotto.randomNumbers());
  }
}

const app = new App();
app.play();
export default App;
