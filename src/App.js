import { Console, Random } from '@woowacourse/mission-utils';
import {
  CONSOLE_MESSAGE,
  ERROR_MESSAGE,
  CONSTANT_NUMBERS,
} from './constants.js';

class App {
  async play() {
    const purchaseAmountInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.TYPE_PURCHASE_AMOUNT
    );
    const purchaseAmount = parseInt(purchaseAmountInput);

    if (isNaN(purchaseAmount)) {
      throw new Exception(ERROR_MESSAGE.NOT_A_NUMBER);
    }

    if (purchaseAmount % CONSTANT_NUMBERS.THOUSAND != 0) {
      throw new Exception(ERROR_MESSAGE.NOT_DIVISIBLE_BY_THOUSAND);
    }

    const numberOfLottoPurchased = purchaseAmount / CONSTANT_NUMBERS.THOUSAND;
    Console.print(
      CONSOLE_MESSAGE.NEW_LINE +
        numberOfLottoPurchased +
        CONSOLE_MESSAGE.PURCHASE_COUNT
    );

    const userLottoNumbers = [];
    for (let i = 0; i < numberOfLottoPurchased; i++) {
      const eachLottoTicket = Random.pickUniqueNumbersInRange(
        CONSTANT_NUMBERS.LOTTO_NUMBER_MIN,
        CONSTANT_NUMBERS.LOTTO_NUMBER_MAX,
        CONSTANT_NUMBERS.LOTTO_NUMBER_COUNT
      );
      userLottoNumbers.push(eachLottoTicket.sort((a, b) => a - b));
    }

    for (let i = 0; i < numberOfLottoPurchased; i++) {
      Console.print(userLottoNumbers[i]);
    }

    const winningNumbersInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.TYPE_WINNING_NUMBERS
    );
    const winningNumbersStringArray = winningNumbersInput.split(',');
    const winningNumbersArray = [];

    for (const stringNumber of winningNumbersStringArray) {
      const integerNumber = parseInt(stringNumber);

      if (isNaN(integerNumber)) {
        throw new Exception(ERROR_MESSAGE.NOT_A_NUMBER);
      }

      if (integerNumber < 1 || integerNumber > 45) {
        throw new Exception(ERROR_MESSAGE.BETWEEN_MIN_AND_MAX);
      }
      winningNumbersArray.push(integerNumber);
    }

    if (new Set(winningNumbersArray).size !== winningNumbersArray.length) {
      throw new Exception(ERROR_MESSAGE.DUPLICATED);
    }

    if (winningNumbersArray.length !== 6) {
      throw new Exception(ERROR_MESSAGE.SHOULD_BE_SIX);
    }

    const bonusNumberString = await Console.readLineAsync(
      CONSOLE_MESSAGE.TYPE_BONUS_NUMBER
    );
    // TODO: 보너스 번호 예외처리
    const bonusNumber = parseInt(bonusNumberString);

    const winnings = Object.freeze({
      three: CONSTANT_NUMBERS.THREE_PRIZE,
      four: CONSTANT_NUMBERS.FOUR_PRIZE,
      five: CONSTANT_NUMBERS.FIVE_PRIZE,
      fiveBonus: CONSTANT_NUMBERS.FIVE_BONUS_PRIZE,
      six: CONSTANT_NUMBERS.SIX_PRIZE,
    });
    let totalWinnings = 0;
    let threeNumbersHitCount = 0;
    let fourNumbersHitCount = 0;
    let fiveNumbersHitCount = 0;
    let fiveNumbersWithBonusHitCount = 0;
    let sixNumbersHitCount = 0;

    Console.print(CONSOLE_MESSAGE.RESULT_STATISTICS);

    for (const numbers of userLottoNumbers) {
      let hitCount = 0;
      let bonusHit = false;
      for (const eachNumber of numbers) {
        if (winningNumbersArray.includes(eachNumber)) {
          hitCount += 1;
        }
        if (eachNumber === bonusNumber) {
          bonusHit = true;
        }
      }
      switch (hitCount) {
        case 3:
          threeNumbersHitCount += 1;
          totalWinnings += winnings['three'];
          break;
        case 4:
          fourNumbersHitCount += 1;
          totalWinnings += winnings['four'];
          break;
        case 5:
          if (bonusHit) {
            fiveNumbersWithBonusHitCount += 1;
            totalWinnings += winnings['fiveBonus'];
          } else {
            fiveNumbersHitCount += 1;
            totalWinnings += winnings['five'];
          }
          break;
        case 6:
          sixNumbersHitCount += 1;
          totalWinnings += winnings['six'];
          break;
        default:
          break;
      }
    }

    // 당첨 통계 출력
    Console.print(
      CONSOLE_MESSAGE.CORRECT_THREE +
        threeNumbersHitCount +
        CONSOLE_MESSAGE.COUNT
    );
    Console.print(
      CONSOLE_MESSAGE.CORRECT_FOUR + fourNumbersHitCount + CONSOLE_MESSAGE.COUNT
    );
    Console.print(
      CONSOLE_MESSAGE.CORRECT_FIVE + fiveNumbersHitCount + CONSOLE_MESSAGE.COUNT
    );
    Console.print(
      CONSOLE_MESSAGE.CORRECT_FIVE_BONUS +
        fiveNumbersWithBonusHitCount +
        CONSOLE_MESSAGE.COUNT
    );
    Console.print(
      CONSOLE_MESSAGE.CORRECT_SIX + sixNumbersHitCount + CONSOLE_MESSAGE.COUNT
    );

    const rateToReturn = (
      ((totalWinnings - purchaseAmount) / purchaseAmount) *
      100
    ).toFixed(1);
    Console.print(
      CONSOLE_MESSAGE.TOTAL_PROFIT_IS + rateToReturn + CONSOLE_MESSAGE.PERCENT
    );
  }
}

export default App;
