import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    Console.print('로또 게임을 시작합니다.');

    const purchaseAmount = await this.inputPurchaseAmount();
    const lottos = await this.generateLottos(purchaseAmount);
  }

  // 2. 로또 구입하기: 로또 구입 금액 입력
  async inputPurchaseAmount() {
    let purchaseAmount = 0;
    while (purchaseAmount <= 0) {
      const input = await Console.readLineAsync('로또를 구입할 금액을 입력하세요: ');
      purchaseAmount = parseInt(input);
      if (isNaN(purchaseAmount) || purchaseAmount % 1000 !== 0 || purchaseAmount <= 0) {
        Console.print('[ERROR] 유효한 금액을 입력하세요 (1,000원 단위).');
      } else {
        return purchaseAmount;
      }
    }
  }

  // 2. 로또 구입하기: 로또 티켓 생성
  async generateLottos(purchaseAmount) {
    const numberOfLotto = Math.floor(purchaseAmount / 1000);
    const lottos = [];

    for (let i = 0; i < numberOfLotto; i++) {
      let lottoNumbers;
      do {
        lottoNumbers = Lotto.generateRandom();
      } while (lottos.some(lotto => lotto.getNumbers().toString() === lottoNumbers.toString()));
      const lotto = new Lotto(lottoNumbers);
      lottos.push(lotto);
    }
    return lottos;
  }
}

export default App;
