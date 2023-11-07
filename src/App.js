import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../src/Lotto.js';

class App {
  async play() {
    try {
      const purchaseAmount = await this.inputPurchaseAmount();
      const tickets = this.generateLottoTickets(purchaseAmount);

      // 당첨 번호 입력 받기
      const winningLotto = await this.inputWinningNumbers();
      const bonusNumber = await this.inputBonusNumber(winningLotto);
      console.log(`보너스 번호: ${bonusNumber}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      this.play();
    }
  }

  // 로또 구입 금액 입력
  async inputPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(
      '구입 금액을 입력해 주세요.'
    );
    const amount = Number(input);
    if (Number.isNaN(amount) || amount % 1000 !== 0) {
      throw new Error(
        '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.'
      );
    }
    return amount;
  }

  // 로또 구입 금액에 따라 티켓 생성
  generateLottoTickets(amount) {
    const tickets = [];
    const ticketCount = amount / 1000;

    for (let i = 0; i < ticketCount; i++) {
      let ticket = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      ticket = this.sortTicketNumbers(ticket);
      tickets.push(ticket);
    }

    return tickets;
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
        const input = await MissionUtils.Console.readLineAsync(
          '당첨 번호 6개를 입력해 주세요.'
        );
        const winningNumbers = input
          .split(',')
          .map((num) => Number(num.trim()));

        if (winningNumbers.some(isNaN)) {
          throw new Error('[ERROR] 당첨 번호는 숫자로 입력해야 합니다.');
        }

        winningLotto = new Lotto(winningNumbers);

        break; // 입력값이 모든 조건을 만족하면 무한루프를 빠져나감
      } catch (error) {
        MissionUtils.Console.print(error.message);
        // 에러가 발생하면 다시 무한루프의 처음으로 돌아감
      }
    }

    return winningLotto;
  }

  // 보너스 번호 입력 받기
  async inputBonusNumber(winningLotto) {
    let bonusNumber;
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          '보너스 번호 1개를 입력해 주세요.'
        );
        bonusNumber = Number(input);

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
}

export default App;
