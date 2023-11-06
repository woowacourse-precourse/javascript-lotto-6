import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStaticMessage(messages) {
    return Console.print(messages);
  },

  printPurchaseAmount(amount) {
    return Console.print(`\n${amount}개를 구매했습니다.`);
  },

  printPurchasedLotto(purchasedLotto) {
    const lottos = purchasedLotto.map((lotto) => `[${lotto.join(', ')}]`).join('\n');
    return Console.print(lottos);
  },
};

export default OutputView;
