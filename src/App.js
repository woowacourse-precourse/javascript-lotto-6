import Input from './views/Input.js';

class App {
  async play() {
    await Input.readPurchaseAmout();

    await Input.readLottoNumber();

    await Input.readBonusNumber();
  }
}

export default App;
