/* eslint-disable no-plusplus */
import { Console } from '@woowacourse/mission-utils';
import LottoConsole from './view/LottoConsole.js';
import Player from './model/Player.js';

class App {
  async play() {
    const budget = await LottoConsole.getBudget();
    const player = new Player(budget);

    // 로또 구매
    player.buyLottos();

    // 구매한 양 출력
    const purchaseAmount = player.getPurchaseAmount();
    LottoConsole.printAmountOfLotto(purchaseAmount);

    // 당첨번호 입력
    const lottoNumbers = await LottoConsole.getLottoNumbers();
    const bonusNumber = await LottoConsole.getBonusNumber();

    // 로또 긁기
    player.checkLottos(lottoNumbers, bonusNumber);

    const scoreCard = player.getScoreCard();
    LottoConsole.printResult(scoreCard);

    const prize = player.getPrize();
    Console.print(`총 수익률은 ${((prize / budget) * 100).toFixed(1)}%입니다.`);
  }
}

export default App;
