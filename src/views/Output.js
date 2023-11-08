import { Console } from '@woowacourse/mission-utils';

class Output {
  static printUserNumbers(purchaseAmount, userNumbers) {
    Console.print(`${purchaseAmount}개를 구매했습니다.`);

    userNumbers.forEach((numbers) => {
      Console.print(`[${numbers}]`);
    });
  }

  static printLottoResult({
    threeEqual,
    fourEqual,
    fiveEqual,
    fiveEqualAndBonus,
    sixEqual,
  }) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${threeEqual}개`);
    Console.print(`4개 일치 (50,000원) - ${fourEqual}개`);
    Console.print(`5개 일치 (1,500,000원) - ${fiveEqual}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveEqualAndBonus}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${sixEqual}개`);
  }

  static printYeild(userYeild) {
    Console.print(`총 수익률은 ${userYeild}%입니다.`);
  }
}

export default Output;
