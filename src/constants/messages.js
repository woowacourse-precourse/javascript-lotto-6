import { Lotto } from '../domain/index.js';

const MESSAGES = Object.freeze({
  /**
   * @param {Lotto} lotto
   * @returns {string}
   */
  printLotto(lotto) {
    return `[${lotto.getNumbers().join(', ')}]`;
  },
  readPurchaseMoney: '구입금액을 입력해 주세요.\n',
});

export default MESSAGES;
