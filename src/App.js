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
      Console.print(`${lottos.length}개를 구매했습니다.`);
      for (let i = 0; i < lottos.length; i++) {
        const str = '[' + lottos[i].join(', ') + ']';
        Console.print(str);
      }

      // 당첨 번호와 보너스 번호를 입력 받는 로직
      const winningNumbers = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요 (1~45 사이의 숫자, 쉼표로 구분): '
      );
      const bonusNumber = parseInt(
        await Console.readLineAsync(
          '\n보너스 번호를 입력해 주세요 (1~45 사이의 숫자): '
        )
      );

      // 당첨 번호와 보너스 번호를 파싱
      const winningNumbersArray = winningNumbers.split(',').map(Number);

      // 로또 번호 검증
      if (
        !winningNumbersArray.every((num) => num >= 1 && num <= 45) ||
        isNaN(bonusNumber) ||
        bonusNumber < 1 ||
        bonusNumber > 45
      ) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }

      // 당첨 결과를 계산하는 로직
      const result = this.calculateResult(
        lottos,
        winningNumbersArray,
        bonusNumber
      );

      // 결과를 출력하는 로직
      this.printResult(result, purchaseAmount);
    } catch (error) {
      Console.print(error.message);
    }
  }
  generateLottos(purchaseAmount) {
    const numberOfLottosToBuy = Math.floor(purchaseAmount / 1000);
    const lottos = [];

    for (let i = 0; i < numberOfLottosToBuy; i++) {
      lottos.push(Lotto.generateNumbers());
    }

    return lottos;
  }

  calculateResult(lottos, winningNumbers, bonusNumber) {
    const result = {
      3: 0,
      4: 0,
      5: 0,
      '5Bonus': 0,
      6: 0,
    };

    for (const lotto of lottos) {
      const matchedNumbers = this.getMatchedNumbers(winningNumbers, lotto);
      const hasBonusNumber = this.hasBonusNumber(bonusNumber, lotto);
      if (matchedNumbers.length === 6) {
        result[6]++;
      } else if (matchedNumbers.length === 5) {
        if (hasBonusNumber) {
          result['5Bonus']++;
        } else {
          result[5]++;
        }
      } else if (matchedNumbers.length === 4) {
        result[4]++;
      } else if (matchedNumbers.length === 3) {
        result[3]++;
      }
    }

    return result;
  }

  // 추가 기능 구현: 당첨 번호와 맞는 숫자 수를 계산
  getMatchedNumbers(winningNumbers, lotto) {
    return lotto.filter((number) => winningNumbers.includes(number));
  }

  // 추가 기능 구현: 보너스 번호와 일치하는지 확인
  hasBonusNumber(bonusNumber, lotto) {
    return lotto.includes(bonusNumber);
  }

  printResult(result, purchaseAmount) {
    Console.print('\n당첨 통계\n');
    Console.print('---\n');

    let totalProfit = 0;
    const key_result = {
      3: 5000,
      4: 50000,
      5: 1500000,
      '5Bonus': 30000000,
      6: 2000000000,
    };
    for (const key in result) {
      const prize = this.getPrize(key);
      Console.print(`${prize}${result[key]}개`);
      if (result[key] > 0) {
        totalProfit = key_result[key] * result[key];
      }
    }

    Console.print(
      `총 수익률은 ${(totalProfit / purchaseAmount) * 100}%입니다.\n\n---`
    );
  }
  getPrize(key) {
    const prizeMap = {
      3: '3개 일치 (5,000원) - ',
      4: '4개 일치 (50,000원) - ',
      5: '5개 일치 (1,500,000원) - ',
      '5Bonus': '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      6: '6개 일치 (2,000,000,000원) - ',
    };
    return prizeMap[key];
  }

  static calculateTotalProfit(result) {
    const totalPurchasedLottos =
      result[3] + result[4] + result[5] + result['5Bonus'] + result[6];
    const totalPrizeMoney =
      result[3] * App.getPrizeMoney('3개 일치') +
      result[4] * App.getPrizeMoney('4개 일치') +
      result[5] * App.getPrizeMoney('5개 일치') +
      result['5Bonus'] * App.getPrizeMoney('5개 일치, 보너스 볼 일치') +
      result[6] * App.getPrizeMoney('6개 일치');

    // 로또를 구매하지 않았을 경우, 수익률은 0%로 처리
    if (totalPurchasedLottos === 0) {
      return 0;
    }

    return (totalPrizeMoney / (totalPurchasedLottos * 1000) - 1) * 100;
  }

  static getPrizeMoney(prize) {
    const prizeMoneyMap = {
      '3개 일치': 5000,
      '4개 일치': 50000,
      '5개 일치': 1500000,
      '5개 일치, 보너스 볼 일치': 30000000,
    };
    return prizeMoneyMap[prize];
  }
}

export default App;

const app = new App();
app.play();
