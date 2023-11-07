import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Utils from './Utils.js';

const NUMBERS_OPTIONS = {
  first: 1,
  last: 45,
  length: 6,
};

const INFORM_TEMPLATE = {
  purchase: '개를 구매했습니다.',
  numberSeperator: ', ',
  lottoSeperator: '\n',
};

class IssuingLotto {
  #count;

  #issuedLotto;

  constructor(count) {
    this.#count = count;
    this.#issueLotto();
  }

  #getRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      NUMBERS_OPTIONS.first,
      NUMBERS_OPTIONS.last,
      NUMBERS_OPTIONS.length,
    );
    return randomNumbers;
  }

  #issueLotto() {
    const usersLotto = [];

    for (let issueCount = 0; issueCount < this.#count; issueCount += 1) {
      const numbers = this.#getRandomNumbers();
      const lotto = new Lotto(numbers);
      const lottoNumbers = lotto.getNumbers();
      lottoNumbers.sort((prev, follow) => prev - follow);

      usersLotto.push(lottoNumbers);
    }

    this.#issuedLotto = usersLotto;
    return usersLotto;
  }

  informIssuedLotto() {
    const lottoList = this.#issuedLotto.map(
      (lotto) => `[${lotto.join(INFORM_TEMPLATE.numberSeperator)}]`,
    );

    Utils.informUser(`${this.#count}${INFORM_TEMPLATE.purchase}`);
    Utils.informUser(`${lottoList.join(INFORM_TEMPLATE.lottoSeperator)}`);
  }

  getIssuedLotto() {
    return this.#issuedLotto;
  }
}

export default IssuingLotto;
