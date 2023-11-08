import { Console, Random } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE, CONSTANT_NUMBERS } from './constants.js';
import UserInput from './Input.js';
import UserOutput from './Output.js';

class App {
  async play() {
    const purchaseAmount = await UserInput.getPurchaseAmount();
    const numberOfLottoPurchased = purchaseAmount / CONSTANT_NUMBERS.THOUSAND;
    UserOutput.printNumberOfLotto(purchaseAmount);

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

    const winningPrize = Object.freeze({
      three: CONSTANT_NUMBERS.THREE_PRIZE,
      four: CONSTANT_NUMBERS.FOUR_PRIZE,
      five: CONSTANT_NUMBERS.FIVE_PRIZE,
      fiveBonus: CONSTANT_NUMBERS.FIVE_BONUS_PRIZE,
      six: CONSTANT_NUMBERS.SIX_PRIZE,
    });

    let totalWinnings = 0;
    let winningCounts = {
      three: 0,
      four: 0,
      five: 0,
      fiveBonus: 0,
      six: 0,
    };

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
          winningCounts.three += 1;
          totalWinnings += winningPrize.three;
          break;
        case 4:
          winningCounts.four += 1;
          totalWinnings += winningPrize.four;
          break;
        case 5:
          if (bonusHit) {
            winningCounts.fiveBonus += 1;
            totalWinnings += winningPrize.fiveBonus;
          } else {
            winningCounts.five += 1;
            totalWinnings += winningPrize.five;
          }
          break;
        case 6:
          winningCounts.six += 1;
          totalWinnings += winningPrize.six;
          break;
        default:
          break;
      }
    }

    UserOutput.printStatistics(winningCounts);

    const rateToReturn = (
      ((totalWinnings - purchaseAmount) / purchaseAmount) *
      100
    ).toFixed(1);

    UserOutput.printRateToReturn(rateToReturn);
  }
}

export default App;
