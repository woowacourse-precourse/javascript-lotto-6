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
    return Console.print(`${lottos}\n`);
  },

  printWinsStatistics(winsStatistics) {
    Console.print(`\n당첨통계\n---`);

    const prizeLevels = [
      { label: '3개 일치 (5,000원)', prizeKey: 'fifthPrize' },
      { label: '4개 일치 (50,000원)', prizeKey: 'fourthPrize' },
      { label: '5개 일치 (1,500,000원)', prizeKey: 'thirdPrize' },
      { label: '5개 일치, 보너스 볼 일치 (30,000,000원)', prizeKey: 'secondPrize' },
      { label: '6개 일치 (2,000,000,000원)', prizeKey: 'firstPrize' },
    ];

    prizeLevels.forEach((level) => {
      Console.print(`${level.label} - ${winsStatistics[level.prizeKey]}개`);
    });
  },
};

export default OutputView;
