import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';
import WinningResult from '../src/WinningResult.js';

class App {
  async play() {
    try {
      const PURCHASE_AMOUNT = await this.inputPurchaseAmount();
      const TICKETS = this.generateLottoTickets(PURCHASE_AMOUNT);
      this.printTickets(TICKETS);

      const WINNING_LOTTO = await this.inputWinningNumbers();
      const BONUS_NUMBER = await this.inputBonusNumber(WINNING_LOTTO);

      let winningResult = this.calculateWinning(
        TICKETS,
        WINNING_LOTTO,
        BONUS_NUMBER
      );
      let returnRate = this.calculateReturnRate(
        winningResult.getTotalPrize(),
        PURCHASE_AMOUNT
      );

      this.printWinningStatistics(winningResult, returnRate);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      this.play();
    }
  }

  // 로또 구입 금액 입력
  async inputPurchaseAmount() {
    const INPUT = await MissionUtils.Console.readLineAsync(
      '구입 금액을 입력해 주세요.'
    );
    const AMOUNT = Number(INPUT);
    if (Number.isNaN(AMOUNT) || AMOUNT % 1000 !== 0) {
      throw new Error(
        '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.'
      );
    }
    return AMOUNT;
  }

  // 로또 구입 금액에 따라 티켓 생성
  generateLottoTickets(amount) {
    const TICKETS = [];
    const TICKET_COUNT = amount / 1000;

    for (let i = 0; i < TICKET_COUNT; i++) {
      let ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      ticket = this.sortTicketNumbers(ticket);
      TICKETS.push(ticket);
    }

    return TICKETS;
  }

  // 로또 번호 오름차순으로 정렬
  sortTicketNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  // 당첨 번호 입력 받기
  async inputWinningNumbers() {
    let winningLotto;
    while (true) {
      try {
        const INPUT = await MissionUtils.Console.readLineAsync(
          '당첨 번호 6개를 입력해 주세요.'
        );
        const WINNING_NUMBERS = INPUT.split(',').map((num) =>
          Number(num.trim())
        );

        if (WINNING_NUMBERS.some(isNaN)) {
          throw new Error('[ERROR] 당첨 번호는 숫자로 입력해야 합니다.');
        }

        winningLotto = new Lotto(WINNING_NUMBERS);

        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return winningLotto;
  }

  // 보너스 번호 입력 받기
  async inputBonusNumber(winningLotto) {
    let bonusNumber;
    while (true) {
      try {
        const INPUT = await MissionUtils.Console.readLineAsync(
          '보너스 번호 1개를 입력해 주세요.'
        );
        bonusNumber = Number(INPUT);

        if (isNaN(bonusNumber)) {
          throw new Error('[ERROR] 보너스 번호는 숫자로 입력해야 합니다.');
        }

        if (bonusNumber < 1 || bonusNumber > 45) {
          throw new Error(
            '[ERROR] 보너스 번호는 1에서 45 사이의 숫자로 입력해야 합니다.'
          );
        }

        if (winningLotto.numbers.includes(bonusNumber)) {
          throw new Error(
            '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.'
          );
        }

        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    return bonusNumber;
  }

  // 당첨 결과 계산
  calculateWinning(TICKETS, winningLotto, bonusNumber) {
    let winningResult = new WinningResult();

    for (let ticket of TICKETS) {
      let count = 0;
      let isBonusMatched = false;

      for (let number of ticket) {
        if (winningLotto.numbers.includes(number)) {
          count++;
        } else if (number === bonusNumber) {
          isBonusMatched = true;
        }
      }

      if (count === 6) {
        winningResult.updatePrize(1);
      } else if (count === 5 && isBonusMatched) {
        winningResult.updatePrize(2);
      } else if (count === 5) {
        winningResult.updatePrize(3);
      } else if (count === 4) {
        winningResult.updatePrize(4);
      } else if (count === 3) {
        winningResult.updatePrize(5);
      }
    }
    return winningResult;
  }

  // 총 수익률 계산
  calculateReturnRate(totalPrize, amount) {
    let returnRate = (totalPrize / amount) * 100;
    returnRate = Math.round(returnRate * 100) / 100; // 소수점 둘째 자리에서 반올림
    return returnRate;
  }

  // 로또 구매 개수와 번호 출력
  printTickets(tickets) {
    MissionUtils.Console.print(`${tickets.length}개를 구매했습니다.`);
    for (let ticket of tickets) {
      MissionUtils.Console.print(`[${ticket.join(', ')}]\n`);
    }
  }

  // 당첨 통계 출력
  printWinningStatistics(winningResult, returnRate) {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(
      `3개 일치 (5,000원) - ${winningResult.getPrizeCount(5)}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${winningResult.getPrizeCount(4)}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${winningResult.getPrizeCount(3)}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningResult.getPrizeCount(
        2
      )}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${winningResult.getPrizeCount(1)}개`
    );
    MissionUtils.Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default App;
