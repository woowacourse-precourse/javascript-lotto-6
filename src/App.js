import { Console } from '@woowacourse/mission-utils';
import LottoGame from './LottoGame.js';
import Lotto from './Lotto.js';

class App {
  async play() {
      const lottoGame = new LottoGame();
      await lottoGame.buyLotto();

      Console.print(`\n${lottoGame.lottoPieces}개를 구매했습니다.`);

      for (let i = 1; i <= lottoGame.lottoPieces; i++)
        Console.print(lottoGame.makeRandomNumber());

      const winningNumber = await lottoGame.inputLottoNumber();

      const lotto = new Lotto(winningNumber);

      const winningBonus = await lottoGame.inputBonusNumber();

      lotto.win(winningBonus, lottoGame.lottoNumbers);
  }
}

export default App;