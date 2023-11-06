// App.js
import Input from "./Input.js";
import Result from "./Result.js";

class App {
  async play() {
    const purchaseAmount = await Input.inputMoney();
    const lottoNumbers = await Input.inputNumber();
    const bonusNumbers = await Input.bonusNumber();
    Result.Result();
  }
}

const app = new App();
app.play();
