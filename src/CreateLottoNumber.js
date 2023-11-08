import { Random, Console } from '@woowacourse/mission-utils';

export default function createLottoNumber(purchaseCount) {
  Console.print(`${purchaseCount}개를 구매했습니다.`);
  const purchasedLotto = [];

  const printLotto = (ticket) => {
    Console.print(`[${ticket.join(", ")}]`)
  };

  const generateLotto = () => {
    return Random.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  };

  for (let i = 0; i < purchaseCount; i++) {
    const eachLotto = generateLotto();
    purchasedLotto.push(eachLotto);
    printLotto(eachLotto);
  };

  return purchasedLotto;

}