import { MissionUtils } from '@woowacourse/mission-utils';
import { getPayment, purchaseLotto } from './Human.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    let lottoQuantity = await getPayment();
    let purchasedLottos = await purchaseLotto(lottoQuantity);
    let lottoNumber = await MissionUtils.Console.readLineAsync(
      '\n당첨번호를 입력해주세요.\n',
    );
    let bonusNumber = await MissionUtils.Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    let theLotto = new Lotto(lottoNumber, bonusNumber);
  }
}

export default App;

let test = new App();
test.play();
