import Lotto from './Lotto.js';
import { MissionUtils, Random, Console } from '@woowacourse/mission-utils';
import readline from 'readline';

class App {
  async play() {
    try {
      const purchaseAmount = await Console.readLineAsync(
        '구입금액을 입력해 주세요: '
      );

      if (isNaN(purchaseAmount) || purchaseAmount < 1000) {
        throw new Error('[ERROR] 로또 구매 금액은 1,000원 이상이어야 합니다.');
      }

      // 구매한 로또 번호를 생성하는 로직
      const lottos = this.generateLottos(purchaseAmount);
      console.log(lottos);

      // 당첨 번호와 보너스 번호를 입력 받는 로직
      const winningNumbers = await Console.readLineAsync(
        '당첨 번호를 입력해 주세요 (1~45 사이의 숫자, 쉼표로 구분): '
      );
      const bonusNumber = parseInt(
        await Console.readLineAsync(
          '보너스 번호를 입력해 주세요 (1~45 사이의 숫자): '
        )
      );

      // 당첨 번호와 보너스 번호를 파싱
      const winningNumbersArray = winningNumbers.split(',').map(Number);

      console.log(winningNumbersArray);
    } catch (error) {
      console.error(error.message);
    }
  }
  generateLottos(purchaseAmount) {
    const numberOfLottosToBuy = Math.floor(purchaseAmount / 1000);
    const lottos = [];

    for (let i = 0; i < numberOfLottosToBuy; i++) {
      lottos.push(new Lotto(Lotto.generateNumbers()));
    }

    return lottos;
  }
}

export default App;

const app = new App();
app.play();
