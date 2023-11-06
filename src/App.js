import Lotto from './Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    let purchaseAmount;

    // 구입 금액 입력
    while (true) {
      purchaseAmount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
      if (purchaseAmount % 1000 !== 0) {
        MissionUtils.Console.print('[ERROR] 1,000원 단위로 입력하세요.\n');
      } else {
        break;
      }
    }

    const numberOfTickets = purchaseAmount / 1000;
    MissionUtils.Console.print(`\n${numberOfTickets}개를 구매했습니다.`);

    // 로또 티켓 생성
    const lottoTickets = this.generateLottoTickets(numberOfTickets);

    // 당첨 번호 입력
    const winningNumbers = await MissionUtils.Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winningNumbersArray = winningNumbers.split(',').map(number => parseInt(number, 10));
    if (winningNumbersArray.some(number => isNaN(number) || number < 1 || number > 45)) {
      MissionUtils.Console.print('[ERROR] 유효하지 않은 당첨 번호가 있습니다.\n');
      return;
    }
    
    // 보너스 번호 입력
    const bonusNumber = await MissionUtils.Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    const parsedBonusNumber = parseInt(bonusNumber, 10);
    if (isNaN(parsedBonusNumber) || parsedBonusNumber < 1 || parsedBonusNumber > 45) {
      MissionUtils.Console.print('[ERROR] 유효하지 않은 보너스 번호입니다.\n');
      return;
    }

    // 당첨 여부 확인
    const winnings = this.checkLottoTickets(lottoTickets, winningNumbersArray, parsedBonusNumber);

    // 결과 출력
    this.displayWinnings(winnings, numberOfTickets);
  }

  generateLottoTickets(numberOfTickets) {
    // 로또 티켓 생성
    const lottoTickets = [];
    for (let i = 0; i < numberOfTickets; i++) {
      const ticketNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedTicketNumbers = ticketNumbers.sort((a, b) => a - b); // 숫자를 오름차순으로 정렬
      const lottoTicket = new Lotto(sortedTicketNumbers);
      lottoTickets.push(lottoTicket);
    }
    // 로또 티켓 출력
    lottoTickets.forEach((ticket) => {
      MissionUtils.Console.print(`[${ticket.getNumbers().join(', ')}]`);
    });
    return lottoTickets;
  }  

  checkLottoTickets(lottoTickets, winningNumbers, bonusNumber) {
    // 로또 번호 확인
  }  
  
  displayWinnings(winnings, numberOfTickets) {
    // 당첨 통계 출력
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    
    // 수익률 계산
  }
}

export default App;
