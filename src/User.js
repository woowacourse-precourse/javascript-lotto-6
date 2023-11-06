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
      Console.print(lottoNumbers.sort((a, b) => a - b));
    });
  }

  async inputLottoWinningNumber() {
    const winningNumber = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return winningNumber;
  }
}

export default User;