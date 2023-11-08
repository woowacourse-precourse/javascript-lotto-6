import { Console } from '@woowacourse/mission-utils';
import LottoConsole from './view/LottoConsole.js';
import Player from './model/Player.js';

class App {
  async play() {
    try {
      const budget = await LottoConsole.getBudgetUntilSuccess();
      const player = new Player(budget);

      // 로또 구매
      player.buyLottos();

      // 구매한 양 출력
      const numOfLottos = player.getNumOfLottos();
      LottoConsole.printAmountOfLotto(numOfLottos);

      // 구매한 로또 출력
      const lottoNumbers = player.getLottoNumbers();
      LottoConsole.printLottoNumbers(lottoNumbers);

      // 당첨번호 입력
      const winningNumbers = await LottoConsole.getLottoNumbersUntilSuccess();
      const bonusNumber = await LottoConsole.getBonusNumberUntilSuccess();

      // 로또 긁기
      player.checkLottos(winningNumbers, bonusNumber);

      const scoreCard = player.getScoreCard();
      LottoConsole.printResult(scoreCard);

      const prize = player.getPrize();
      LottoConsole.printRateOfReturn(prize, budget);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
