import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import inputView from './View/inputView.js';

class App {
  async play() {
    const lottoCount = await inputView.readPurchasePriceAsync('구입금액을 입력해 주세요.\n');

    Console.print(`\n${lottoCount}개를 구입했습니다.`);
    this.purchaseLotto(lottoCount);
    const winningNumbers = await inputView.readWinningNumbersAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    const lotto = new Lotto(winningNumbers);
    const bonusNumber = await inputView.readBonusNumberAsync('\n보너스 번호를 입력해 주세요.\n');
  }

  purchaseLotto(lottoCount) {
    const myLottoNumbers = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumber.sort((a, b) => a - b);
      myLottoNumbers.push(randomNumber);
    }
    Console.print(myLottoNumbers);
  }
}

export default App;
