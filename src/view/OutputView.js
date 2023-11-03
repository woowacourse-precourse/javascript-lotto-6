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

  #print(message) {
    Console.print(message);
  }
}

export default OutputView;
