import { Console } from '@woowacourse/mission-utils';

class View {
  async getPurchaseMoney() {
    const purchaseMoney = await Console.readLinsAsync(
      '구입금액을 입력해 주세요.\n'
    );
    return purchaseMoney;
  }

  async getWinNumber() {
    const winNumber = await Console.readLinsAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    return winNumber;
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLinsAsync(
      '보너스 번호를 입력해 주세요.\n'
    );
    return bonusNumber;
  }

  printAmount(amount) {
    Console.print(`${amount}개를 구매했습니다.\n`);
  }

  printLottoNumbers(numbers) {
    numbers.forEach((number) => Console.print(`${number}\n`));
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
}

export default View;
