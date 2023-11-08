import User from './User.js';
import InputLottoNumber from './InputLottoNumber.js';

class App {
  async play() {
    const user = new User();
    await user.inputPurchaseAmount();

    const inputLottoNumber = new InputLottoNumber(user);
    await inputLottoNumber.inputWinningNumber();
  }
}

export default App;
