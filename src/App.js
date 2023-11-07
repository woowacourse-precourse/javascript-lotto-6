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
      const sortedTicketNumbers = ticketNumbers.sort((a, b) => a - b);
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
    const winnings = {
      1: { count: 0, prize: 2000000000 },
      2: { count: 0, prize: 30000000 },
      3: { count: 0, prize: 1500000 },
      4: { count: 0, prize: 50000 },
      5: { count: 0, prize: 5000 },
    };
  
    for (const ticket of lottoTickets) {
      const ticketNumbers = ticket.getNumbers();
      const intersection = ticketNumbers.filter(number => winningNumbers.includes(number));
  
      if (intersection.length === 6) {
        winnings[1].count++;
      } else if (intersection.length === 5 && ticketNumbers.includes(bonusNumber)) {
        winnings[2].count++;
      } else if (intersection.length === 5) {
        winnings[3].count++;
      } else if (intersection.length === 4) {
        winnings[4].count++;
      } else if (intersection.length === 3) {
        winnings[5].count++;
      }
    }
  
    return winnings;
  }  
  
  displayWinnings(winnings, numberOfTickets) {
    // 당첨 통계 출력
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    
    const prizeLevels = {
      1: '6개 일치',
      2: '5개 일치, 보너스 볼 일치',
      3: '5개 일치',
      4: '4개 일치',
      5: '3개 일치',
    };

    for (let i = 5; i >= 1; i--) {
      const prizeCount = winnings[i].count;
      const prizeAmount = winnings[i].prize.toLocaleString();
      MissionUtils.Console.print(`${prizeLevels[i]} (${prizeAmount}원) - ${prizeCount}개`);
    }

    const totalPrize = [...Array(6).keys()].slice(1, 6).reduce((total, i) => {
      return total + winnings[i].count * winnings[i].prize;
    }, 0);

    const totalCost = 1000 * numberOfTickets;
    const profitPercentage = 100 - ((totalCost - totalPrize) / totalCost) * 100;
    MissionUtils.Console.print(`총 수익률은 ${profitPercentage.toFixed(1)}%입니다.`);
  }
}

export default App;
