import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRICE, LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN, LOCALE, ROUNDING_POINT } from './constant/constants.js';
import { 
  VALIDATION_LOTTO_NUMBER_RANGE,
  VALIDATION_INPUT_PURCHASE_AMOUNT_TYPE,
  VALIDATION_INPUT_PURCHASE_AMOUNT_UNIT
} from "./constant/message.js";
import Lotto from './Lotto.js';

class User {
  validatePurchaseAmount(purchaseAmount) {
    const splitedPurchaseAmount = purchaseAmount.split('');

    splitedPurchaseAmount.forEach(char => {
      if (isNaN(parseInt(char))) {
        throw new Error(VALIDATION_INPUT_PURCHASE_AMOUNT_TYPE);
      }
    })

    if (parseInt(purchaseAmount) % LOTTO_PRICE !== 0) {
      throw new Error(VALIDATION_INPUT_PURCHASE_AMOUNT_UNIT);
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

    return parseInt(purchaseAmount) / LOTTO_PRICE;
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
      if (number < LOTTO_NUMBER_MIN || number > LOTTO_NUMBER_MAX) {
        throw new Error(VALIDATION_LOTTO_NUMBER_RANGE);
      }
    });
  }

  async inputLottoWinningNumber() {
    let isValidInput = false;
    let inputNumber, winningNumber;

    while (!isValidInput) {
      inputNumber = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      winningNumber = inputNumber.split(',').map(number => parseInt(number));

      try {
        new Lotto(winningNumber); // 사용자가 입력한 당첨 번호 예외 처리
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
      result += `\n${rankingDetail.theNumberOfMatches}개 일치${rankingDetail.haveBonusNumber?', 보너스 볼 일치':''} (${reward.toLocaleString(LOCALE)}원) - ${count}개`;
    });

    Console.print(result);
  }

  printLottoProfitRate(profitRate) {
    let roundedProfitRate = Math.round(profitRate * 10**(ROUNDING_POINT-1)) / 10**(ROUNDING_POINT-1);

    if (roundedProfitRate < 0) {
      roundedProfitRate += 100;
    }

    Console.print(`총 수익률은 ${roundedProfitRate}%입니다.`);
  }
}

export default User;
