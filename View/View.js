import { Console } from '@woowacourse/mission-utils';

class View {
  async getPurchaseMoney() {
    const purchaseMoney = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
    return purchaseMoney;
  }

  async getLottoNumber() {
    const winNumber = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    return winNumber.split(',').map((number) => Number(number));
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );
    return bonusNumber;
  }

  printAmount(amount) {
    Console.print(`${amount}개를 구매했습니다.\n`);
  }

  printPurchasedNumbers(numbers) {
    numbers.forEach((number) => Console.print(`[${number.join(', ')}]`));
  }

  printWinResult(profit, resultBoard) {
    Console.print('당첨 통계\n');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${resultBoard.three}개
    4개 일치 (50,000원) - ${resultBoard.four}개
    5개 일치 (1,500,000원) - ${resultBoard.five}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultBoard.fiveBonus}개
    6개 일치 (2,000,000,000원) - ${resultBoard.six}개\n`);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }

  printNewLine() {
    Console.print('');
  }
}

export default View;
