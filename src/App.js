import User from './User.js';
import InputLottoNumber from './InputLottoNumber.js';
import CompareLotto from './CompareLotto.js';

class App {
  async play() {
    const user = new User();
    await user.inputPurchaseAmount();

    const inputLottoNumber = new InputLottoNumber(user);
    inputLottoNumber.inputWinningNumber();
  }
}

export default App;
