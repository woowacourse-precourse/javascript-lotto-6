import { Console, Random } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE, CONSTANT_NUMBERS } from './constants.js';
import UserInput from './Input.js';

class App {
  async play() {
    const purchaseAmount = await UserInput.getPurchaseAmount();

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

    const winningNumbersArray = await UserInput.getSixWinningNumbers();
    const bonusNumber = await UserInput.getBonusNumber(winningNumbersArray);

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
