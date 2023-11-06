// App.js
import Input from "./Input.js";

class App {
  async play() {
    const purchaseAmount = await Input.inputMoney();
    const lottoNumbers = await Input.inputNumber();
    const bonusNumbers = await Input.bonusNumber();
  }
}

const app = new App();
app.play();
