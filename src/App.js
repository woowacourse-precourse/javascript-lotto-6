import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import inputView from './View/inputView.js';

class App {
  async play() {
    const purchasePrice = await inputView.readPurchasePriceAsync('구입금액을 입력해 주세요.\n');
    const lottoCount = purchasePrice / 1000;
    Console.print(`\n${lottoCount}개를 구입했습니다.`);
    const myLottoNumbers = this.purchaseLottos(lottoCount);
    Console.print(myLottoNumbers);
    const winningNumbers = await inputView.readWinningNumbersAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    const lotto = new Lotto(winningNumbers);
    const bonusNumber = await inputView.readBonusNumberAsync('\n보너스 번호를 입력해 주세요.\n');
    lotto.getLottoResult(myLottoNumbers, bonusNumber);
  }

  purchaseLottos(lottoCount) {
    const myLottoNumbers = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumber.sort((a, b) => a - b);
      myLottoNumbers.push(randomNumber);
    }
    // Console.print(myLottoNumbers); // TODO: 출력 분리하기
    return myLottoNumbers;
  }
}

export default App;
