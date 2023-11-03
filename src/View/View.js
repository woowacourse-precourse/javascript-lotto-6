import { Console } from '@woowacourse/mission-utils';
import winningsTable from '../../utils/winningsTable';
import { MESSAGE } from '../../constants/message';

class View {
  async readMoney() {
    const moneyStr = await Console.readLineAsync(MESSAGE.requireMoney);
    const money = Number(moneyStr);
    return money;
  }

  async readWinningNumbers() {
    const winningNumbersStr = await Console.readLineAsync(
      MESSAGE.requireWinningNumbers,
    );
    const winningNumbers = winningNumbersStr.split(',').map(Number);
    return winningNumbers;
  }

  async readBonusNumber() {
    const bonusNumberStr =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.');
    const bonusNumber = Number(bonusNumberStr);
    return bonusNumber;
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const formattedLottoNumbers = lotto.numbers.join(', ');
      Console.print(`[${formattedLottoNumbers}]`);
    });
  }

  printStatistics(statistics) {
    Object.entries(statistics).forEach(([matchedNum, count], idx) => {
      if (idx < 3) return;
      const winnings = winningsTable[matchedNum].toLocaleString();
      Console.print(`${matchedNum}개 일치 (${winnings}원) - ${count}개`);
    });
  }

  printRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default View;
