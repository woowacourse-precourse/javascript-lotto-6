import { MissionUtils } from '@woowacourse/mission-utils';
import LottoInput from '../View/LottoInput';

class LottoMachine {
  static prizeList = {
    3: { countMatch: 0, prize: 5000 },
    4: { countMatch: 0, prize: 50000 },
    5: { countMatch: 0, prize: 1500000 },
    '5+1': { countMatch: 0, prize: 30000000 },
    6: { countMatch: 0, prize: 2000000000 },
  };

  static async askWinningNumbers() {
    let winningNumbers;

    while (true) {
      try {
        winningNumbers = await LottoInput.getWinningNumbers();
        LottoInput.validateNumbersArray(winningNumbers);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    return winningNumbers;
  }

  static async askBonusNumber() {
    let bonusNumber;

    while (true) {
      try {
        bonusNumber = await LottoInput.getBonusNumber();
        LottoInput.validateNumber(bonusNumber);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return bonusNumber;
  }

  static async drawWinningNumbers() {
    const WINNING_NUMBERS = new Set(await LottoMachine.askWinningNumbers());
    const BONUS_NUMBER = await LottoMachine.askBonusNumber();
    return { WINNING_NUMBERS, BONUS_NUMBER };
  }

  static calculatePrize(lottoTickets, winningNumbers, bonusNumber) {
    const PRIZE_LIST = { ...LottoMachine.prizeList };

    lottoTickets.forEach((lottoTicket) => {
      const MATCH_COUNT = LottoMachine.countMatchNumbers(
        lottoTicket.getLottoNumbers(),
        winningNumbers,
      );
      const BONUS_MATCH_COUNT = LottoMachine.isBonusNumberMatch(
        lottoTicket,
        bonusNumber,
      );

      if (MATCH_COUNT === 5 && BONUS_MATCH_COUNT) {
        PRIZE_LIST['5+1'].countMatch += 1;
      } else if (PRIZE_LIST[MATCH_COUNT]) {
        PRIZE_LIST[MATCH_COUNT].countMatch += 1;
      }
    });

    return PRIZE_LIST;
  }

  static isBonusNumberMatch(lottoTicket, bonusNumber) {
    return lottoTicket.getLottoNumbers().includes(bonusNumber);
  }

  static countMatchNumbers(lottoTicket, winningNumbers) {
    return lottoTicket.filter((number) => winningNumbers.includes(number))
      .length;
  }

  static calculateTotalPrize(prize) {
    return Object.values(prize).reduce(
      (acc, { countMatch, prize }) => acc + countMatch * prize,
      0,
    );
  }
}

export default LottoMachine;
