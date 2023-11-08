import { Console } from '@woowacourse/mission-utils';

const printEachLotto = (lotto) => {
  let str = ``;
  lotto.forEach((number, idx, arr) => {
    if (idx === 0) {
      str += `[${number}, `;
      return;
    }
    if (idx === arr.length - 1) {
      str += `${number}]`;
      return;
    }
    str += `${number}, `;
  });

  return Console.print(str);
};

export default printEachLotto;
