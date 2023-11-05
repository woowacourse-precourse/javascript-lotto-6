import Lotto from './Lotto.js';
import User from './User.js';

class App {
  async play() {
    const user = new User();
    const lottoCount = await user.calculateLottoCount();

    const initialLottoNumbers = [1, 2, 3, 4, 5, 6];

    const lotto = new Lotto(initialLottoNumbers);
    lotto.generateRandomNumbers();
    console.log('무작위로 생성된 로또 번호:', lotto.getNumbers());
  }
}

export default App;
