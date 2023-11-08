import User from "./User.js";
import Shop from "./Shop.js";
import { getMoney, getLottoAnswer, getLottoBonus } from './utils.js'
class App {
  async play() {
    const money = await getMoney();
    const user = new User(money);
    const shop = new Shop();

    const lotto = await getLottoAnswer();
    shop.inputAnswer(lotto);

    const bonus = await getLottoBonus(lotto);
    shop.inputBonus(bonus);

    user.showResult(shop);
  }
  
}

export default App;
