import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const utility = {
  changeStringToNumber: (str) => Number(str),
  validateInput: (input) => {
    const number = Number(input);
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
  },
  getLottoAmount: (money) => money / 1000,

  generateLottos: (amount) => {
    const lottos = [];
    for (let i = 0; i < amount; i += 1) {
      lottos.push(utility.generateLotto());
    }
    return lottos;
  },

  generateLotto: () => {
    const numbers = [];
    while (numbers.length < 6) {
      const number = Random.pickUniqueNumbersInRange(1, 45, 6);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    const lotto = new Lotto(numbers);
    lotto.printLotto();
    return lotto;
  },
};

export default utility;
