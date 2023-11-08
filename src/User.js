import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class User {
  validatePurchaseAmount(purchaseAmount) {
    const splitedPurchaseAmount = purchaseAmount.split('');

    splitedPurchaseAmount.forEach(char => {
      if (isNaN(parseInt(char))) {
        throw new Error("[ERROR] 로또 구입 금액은 숫자로 입력해야 합니다.");
      }
    })

    if (parseInt(purchaseAmount) % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
    }
  }

  async inputLottoPurchaseAmount() {
    let isValidInput = false;
    let purchaseAmount;
    
    while (!isValidInput) {
      purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      
      try {
        this.validatePurchaseAmount(purchaseAmount);
        isValidInput = true;
      } catch (e) {
        Console.print(e.message);
      }
    }

    return parseInt(purchaseAmount) / 1000;
  }

  printLottoNumbers(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      const lottoNumbers = lotto.myNumbers;
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  validateLottoNumberRange(lottoNumebers) {
    lottoNumebers.forEach(number => {
      if (number <1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  async inputLottoWinningNumber() {
    let isValidInput = false;
    let inputNumber;
    let winningNumber;

    
    while (!isValidInput) {
      inputNumber = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      winningNumber = inputNumber.split(',').map(number => parseInt(number));

      try {
        new Lotto(winningNumber);
        isValidInput = true;
      } catch (e) {
        Console.print(e.message);
      }
    }

    return winningNumber;
  }

  async inputLottoBonusNumber() {
    let isValidInput = false;
    let bonusNumber;

    
    while (!isValidInput) {
      bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');

      try {
        this.validateLottoNumberRange([parseInt(bonusNumber)]);
        isValidInput = true;
      } catch (e) {
        Console.print(e.message);
      }
    }

    return parseInt(bonusNumber);
  }

  printAllLottoResult(allLottoResult) {
    let result = '\n당첨 통계\n---';

    Object.values(allLottoResult).forEach(value => {
      const {rankingDetail, reward, count} = value;
      result += `\n${rankingDetail.theNumberOfMatches}개 일치${rankingDetail.haveBonusNumber?', 보너스 볼 일치':''} (${reward.toLocaleString('ko-KR')}원) - ${count}개`;
    });

    Console.print(result);
  }

  printLottoProfitRate(profitRate) {
    let roundedProfitRate = Math.round(profitRate * 10) / 10;

    if (roundedProfitRate < 0) {
      roundedProfitRate += 100;
    }

    Console.print(`총 수익률은 ${roundedProfitRate}%입니다.`);
  }
}

export default User;