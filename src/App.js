import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import inputView from './View/inputView.js';

class App {
  async play() {
    const purchase = await inputView.readPurchasePriceAsync('구입금액을 입력해 주세요.\n');
    Console.print(purchase);
    const winningNumbers = await inputView.readWinningNumbersAsync('당첨 번호를 입력해 주세요.\n');
    Console.print(winningNumbers);
    const lotto = new Lotto(winningNumbers);
    const bonusNumber = await inputView.readBonusNumberAsync('보너스 번호를 입력해 주세요.\n');
    Console.print(bonusNumber);
  }
}

export default App;
