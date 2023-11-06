import { LOTTO_RANK } from './LottoOption.js';

export const LOTTO_NOTIFICATION_FORMAT = Object.freeze({
  lottoAmount(amount) {
    return `${amount}개를 구매했습니다.`;
  },
});

export const LOTTO_NOTIFICATION_MESSAGE = Object.freeze({
  enterLottoSeedMoney: '\n구입 금액을 입력해 주세요.\n',
  enterLottoWinningNumber: '\n당첨 번호를 입력해 주세요.\n',
  enterLottoWinningBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  result: '\n당첨 통계\n---',
});

export const LOTTO_RESULT_FORMANT = Object.freeze({
  first(amount) {
    return `6개 일치 (${LOTTO_RANK.first.prizeValue.toLocaleString()}원) - ${amount}개`;
  },
  second(amount) {
    return `5개 일치, 보너스 볼 일치 (${LOTTO_RANK.second.prizeValue.toLocaleString()}원) - ${amount}개`;
  },
  third(amount) {
    return `5개 일치 (${LOTTO_RANK.third.prizeValue.toLocaleString()}원) - ${amount}개`;
  },
  fourth(amount) {
    return `4개 일치 (${LOTTO_RANK.fourth.prizeValue.toLocaleString()}원) - ${amount}개`;
  },
  fifth(amount) {
    return `3개 일치 (${LOTTO_RANK.fifth.prizeValue.toLocaleString()}원) - ${amount}개`;
  },
  result(profit) {
    return `총 수익률은 ${profit}% 입니다.`;
  },
});
