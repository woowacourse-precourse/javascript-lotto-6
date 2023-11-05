// App.js
import InputMoney from "./InputMoney.js";

class App {
  async play() {
    const purchaseAmount = await InputMoney.inputMoney();
    // 이후 로또 번호 생성 및 게임 진행 로직 구현
  }
}

const app = new App();
app.play();
