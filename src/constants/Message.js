import { LOTTO_RANK } from './GameSetting.js';

export const MESSAGE_NOTIFICATION = Object.freeze({
  buyMoney: '구입금액을 입력해 주세요.\n',
  winningLotto: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  result: '\n당첨 통계\n---',
  profitRate: `총 수익률은`,
});

export const MESSAGE_LOTTO_COUNT = Object.freeze({
  buyLotto(value) {
    return `\n${value}개를 구매했습니다.`;
  },
});

export const MESSAGE_RANK_RESULT = Object.freeze({
  FIFTH(value) {
    return `3개 일치 (${LOTTO_RANK.FIFTH.winningMoney.toLocaleString()}원) - ${value}개`;
  },
  FOURTH(value) {
    return `4개 일치 (${LOTTO_RANK.FOURTH.winningMoney.toLocaleString()}원) - ${value}개`;
  },
  THIRD(value) {
    return `5개 일치 (${LOTTO_RANK.THIRD.winningMoney.toLocaleString()}원) - ${value}개`;
  },
  SECOND(value) {
    return `5개 일치, 보너스 볼 일치 (${LOTTO_RANK.SECOND.winningMoney.toLocaleString()}원) - ${value}개`;
  },
  FIRST(value) {
    return `6개 일치 (${LOTTO_RANK.FIRST.winningMoney.toLocaleString()}원) - ${value}개`;
  },
});
