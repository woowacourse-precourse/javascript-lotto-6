import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    const purchaseAmountInput = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
    const purchaseAmount = parseInt(purchaseAmountInput);

    if (isNaN(purchaseAmount)) {
      throw new Exception('[ERROR] 숫자가 아닙니다.');
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
      '\n당첨 번호를 입력해 주세요.\n'
    );
    const winningNumbersStringArray = winningNumbersInput.split(',');
    const winningNumbersArray = [];

    for (const stringNumber of winningNumbersStringArray) {
      const integerNumber = parseInt(stringNumber, 10);

      if (isNaN(integerNumber)) {
        throw new Exception('[ERROR] 숫자가 아닙니다.');
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
      '\n보너스 번호를 입력해 주세요.\n'
    );
    // TODO: 보너스 번호 예외처리
    const bonusNumber = parseInt(bonusNumberString);

    const winnings = Object.freeze({
      three: 5000,
      four: 50000,
      five: 1500000,
      fiveBonus: 30000000,
      six: 2000000000,
    });
    let totalWinnings = 0;
    let threeNumbersHitCount = 0;
    let fourNumbersHitCount = 0;
    let fiveNumbersHitCount = 0;
    let fiveNumbersWithBonusHitCount = 0;
    let sixNumbersHitCount = 0;

    Console.print('\n당첨 통계\n---');

    for (const numbers of userLottoNumbers) {
      let hitCount = 0;
      let bonusHit = false;
      for (const eachNumber of numbers) {
        if (winningNumbersArray.includes(eachNumber)) {
          hitCount += 1;
        }
        if (eachNumber === bonusNumber) {
          bonusHit = true;
        }
      }
      switch (hitCount) {
        case 3:
          threeNumbersHitCount += 1;
          totalWinnings += winnings['three'];
          break;
        case 4:
          fourNumbersHitCount += 1;
          totalWinnings += winnings['four'];
          break;
        case 5:
          if (bonusHit) {
            fiveNumbersWithBonusHitCount += 1;
            totalWinnings += winnings['fiveBonus'];
          } else {
            fiveNumbersHitCount += 1;
            totalWinnings += winnings['five'];
          }
          break;
        case 6:
          sixNumbersHitCount += 1;
          totalWinnings += winnings['six'];
          break;
        default:
          break;
      }
    }

    // 당첨 통계 출력
    Console.print(`3개 일치 (5,000원) - ${threeNumbersHitCount}개`);
    Console.print(`4개 일치 (50,000원) - ${fourNumbersHitCount}개`);
    Console.print(`5개 일치 (1,500,000원) - ${fiveNumbersHitCount}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveNumbersWithBonusHitCount}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${sixNumbersHitCount}개`);

    const rateToReturn = (
      ((totalWinnings - purchaseAmount) / purchaseAmount) *
      100
    ).toFixed(1);
    Console.print(`총 수익률은 ${rateToReturn}%입니다.`);
  }
}

export default App;
