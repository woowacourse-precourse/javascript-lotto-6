import { Console } from '@woowacourse/mission-utils';

class Output {
  static printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static printResult(result, purchaseAmount) {
    Console.print('당첨 통계');
    Console.print('---');
    Object.entries(result).forEach(([key, value]) => {
      const prize = value.prize.toLocaleString();
      Console.print(`${key} (${prize}원) - ${value.count}개`);
    });
    const totalRatio = ((result.totalPrize - purchaseAmount) / purchaseAmount) * 100;
    Console.print(`총 수익률은 ${totalRatio.toFixed(1)}%입니다.`);
  }
}

export default Output;
