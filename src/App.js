import Lotto from './Lotto.js';
import UserInput from './view/userInput.js';
import makeLottoNumbers from './controller/makeLottoNumbers.js';

class App {

  constructor() {
    this.UserInput = new UserInput();
  }

  async play() {
    const amount = await this.UserInput.amount();
    const lottoNumbers = makeLottoNumbers(amount);
    this.lotto = new Lotto(amount, lottoNumbers);
    // this.lotto.print();
  }
}

export default App;
