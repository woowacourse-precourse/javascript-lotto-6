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

    const winningNumbersInput = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    const winningNumbersStringArray = winningNumbersInput.split(',');
    const winningNumbersArray = [];

    for (const stringNumber of winningNumbersStringArray) {
      const integerNumber = parseInt(stringNumber, 10);

      if (isNaN(integerNumber)) {
        throw new Exception('[ERROR] 입력값이 숫자가 아닙니다.');
      }

      if (integerNumber < 1 || integerNumber > 45) {
        throw new Exception('[ERROR] 1부터 45 사이의 숫자만 가능합니다.');
      }
      winningNumbersArray.push(integerNumber);
    }

    if (new Set(winningNumbersArray).size !== winningNumbersArray.length) {
      throw new Exception('[ERROR] 중복된 값이 있습니다.');
    }

    if (winningNumbersArray.length !== 6) {
      throw new Exception('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    const bonusNumberString = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );
    // TODO: 보너스 번호 예외처리
  }
}

export default App;
