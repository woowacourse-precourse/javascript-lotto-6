import { Console } from '@woowacourse/mission-utils';

class User {
  async inputLottoPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return parseInt(purchaseAmount) / 1000;
  }

  printLottoNumbers(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      const lottoNumbers = lotto.myNumbers;
      Console.print(lottoNumbers);
    });
  }

  async inputLottoWinningNumber() {
    const winningNumber = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return winningNumber;
  }

  async inputLottoBonusNumber() {
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  }
}

export default User;