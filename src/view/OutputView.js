import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printTotalLottos({ quantity, lottos }) {
    this.#printPurchaceTitle(quantity);
    this.#printLottos(lottos);
  }

  #printPurchaceTitle(quantity) {
    this.#print(`\n${quantity}개를 구매했습니다.`);
  }

  #printLottos(lottos) {
    const result = [...lottos].reduce(
      (totalLottos, currentLotto) => (totalLottos += `[${currentLotto.join(', ')}]\n`),
      ''
    );

    this.#print(result);
  }

  printResult(result) {
    const prize = Object.keys(result).map((price) => Number(price).toLocaleString());
    const matchedLength = Object.values(result);

    this.#print(
      `\n당첨 통계
---
3개 일치 (${prize[0]}원) - ${matchedLength[0]}개
4개 일치 (${prize[1]}원) - ${matchedLength[1]}개
5개 일치 (${prize[2]}원) - ${matchedLength[2]}개
5개 일치, 보너스 볼 일치 (${prize[3]}원) - ${matchedLength[3]}개
6개 일치 (${prize[4]}원) - ${matchedLength[4]}개`
    );
  }

  #print(message) {
    Console.print(message);
  }
}

export default OutputView;
