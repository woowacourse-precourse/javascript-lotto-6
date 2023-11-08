// App.js
import Input from "./Input.js";
import Result from "./Result.js";

class App {
  async play() {
    const { purchaseAmount, lottoNumbersArray } = await Input.inputMoney();
    const userLottoNumbers = await Input.inputNumber();
    const userBonusNumber = await Input.bonusNumber();

    await Result.showResult(
      lottoNumbersArray,
      userLottoNumbers,
      userBonusNumber,
      purchaseAmount
    );
  }
}

const app = new App();
app.play();