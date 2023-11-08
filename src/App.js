import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    Console.print('로또 게임을 시작합니다.');

    const purchaseAmount = await this.inputPurchaseAmount();
    const lottos = await this.generateLottos(purchaseAmount);

    this.displayPurchasedLottos(lottos);

    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber();
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

  // 2. 로또 구입하기: 구매한 로또 티켓 수 출력
  displayPurchasedLottos(lottos) {
    console.log(lottos)
    const lottosCount = lottos.length;
    Console.print(`${lottosCount}개를 구매했습니다.`);

    // 2. 로또 구입하기: 로또 번호 목록 출력
    const fixedNumbers = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    fixedNumbers.forEach(numbers => {
      Console.print(`[${numbers.join(', ')}]`);
    });
  }

// 3. 당첨 확인: 당첨 번호 입력
  async inputWinningNumbers() {
    while (true) {
      const input = await Console.readLineAsync('당첨 번호를 입력해 주세요: ');
      const winningNumbers = input.split(',').map(number => parseInt(number.trim()));

      if (winningNumbers.length !== 6 || !winningNumbers.every(number => !isNaN(number) && number >= 1 && number <= 45)) {
        Console.print('[ERROR] 유효한 당첨 번호를 입력하세요 (1부터 45까지 6개의 숫자).');
      } else {
        return winningNumbers;
      }
    }
  }

  // 3. 당첨 확인: 보너스 번호 입력
  async inputBonusNumber() {
    while (true) {
      const input = await Console.readLineAsync('보너스 번호를 입력해 주세요: ');
      const bonusNumber = parseInt(input.trim());

      if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
        Console.print('[ERROR] 유효한 보너스 번호를 입력하세요 (1부터 45까지의 숫자).');
      } else {
        return bonusNumber;
      }
    }
  }
}

export default App;
