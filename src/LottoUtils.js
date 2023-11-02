import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
export const inputAmount = async () => {
  try {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    return amount;
  } catch (error) {
    Console.print(error.message);
  }
};
export const inputWinningNumbers = async () => {
  try {
    const winningNumbers =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    return winningNumbers;
  } catch (error) {
    Console.print(error.message);
  }
};
export const inputBonusNumber = async () => {
  try {
    const bonusNumber =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return bonusNumber;
  } catch (error) {
    Console.print(error.message);
  }
};
export const getRandomNumbers = () => {
  const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return numbers;
};
export const getLottoCount = amount => {
  return amount / 1000;
};
export const issueLotto = () => {
  const numbers = getRandomNumbers();
  const lotto = new Lotto(numbers);
  return lotto;
};
export const getLottos = lotto_count => {
  const lottos = [];
  for (let i = 0; i < lotto_count; i++) {
    const newLotto = issueLotto();
    lottos.push(newLotto);
  }
  return lottos;
};
export const printLottos = lottos => {
  Console.print(`${lottos.length}개를 구매했습니다.`);
  lottos.forEach(lotto => {
    Console.print(lotto.getNumbers());
  });
  Console.print('');
};
