import Input from './Input.js';
import LottoMachine from './Lotto.js';
import Game from './Game.js';
import Result from './Result.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      // Input 인스턴스를 생성 및 사용자로부터 구매 금액 입력받기
      const input = new Input();
      const purchaseAmount = await input.getPurchaseAmount();

      // LottoMachine 인스턴스를 생성 및 로또 발행하기
      const lottoMachine = new LottoMachine(purchaseAmount);
      lottoMachine.printLottos();

      // 사용자로부터 당첨 번호와 보너스 번호를 입력받기
      const winningNumbers = await input.getWinningNumbers();
      const bonusNumber = await input.getBonusNumber(winningNumbers);

      // Game 인스턴스를 생성 및 게임 진행(로또와 입력번호 비교)하기
      const game = new Game(
        winningNumbers,
        bonusNumber,
        lottoMachine.getLottos(),
      );
      const compareResult = game.play();

      // Result 인스턴스를 생성 및 결과를 출력하기
      new Result(compareResult, purchaseAmount).print();
    } catch (error) {
      // 예외를 캐치하여 콘솔에 출력
      Console.print('[ERROR] ' + error.message);
    }
  }
}

export default App;
