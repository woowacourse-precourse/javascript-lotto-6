// App.js
import Input from "./Input.js";
import Result from "./Result.js";

class App {
  async play() {
    await Input.inputMoney();
    await Input.inputNumber();
    await Input.bonusNumber();

    Result.showResult();
  }
}

const app = new App();
app.play();
