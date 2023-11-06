import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const purchaseAmountInput = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );

    if (purchaseAmountInput.length === 0) {
      throw new Exception('[ERROR] 입력값이 존재하지 않습니다.');
    }

    if (/[\n\s]|[^0-9]/.test(purchaseAmountInput)) {
      throw new Exception('[ERROR] 숫자가 아닌 값이 있습니다.');
    }

    if (purchaseAmountInput % 1000 != 0) {
      throw new Exception('[ERROR] 구입금액은 1,000원 단위여야 합니다.');
    }

    const numberOfLottoPurchased = parseInt(purchaseAmountInput) / 1000;
    Console.print(`\n${numberOfLottoPurchased}개를 구매했습니다.`);

    const userLottoNumbers = [];
    for (let i = 0; i < numberOfLottoPurchased; i++) {
      const eachLottoTicket = Random.pickUniqueNumbersInRange(1, 45, 6);
      userLottoNumbers.push(eachLottoTicket.sort((a, b) => a - b));
    }

    for (let i = 0; i < numberOfLottoPurchased; i++) {
      Console.print(userLottoNumbers[i]);
    }
  }
}

export default App;
