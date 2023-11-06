import { LOTTO_MAGICNUMBER, LOTTO_PRICE, LOTTO_RANK } from './LottoOption.js';
import { DIVIDER } from './Symbol.js';

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

export const LOTTO_ERROR_MESSAGE = Object.freeze({
  emptyInput: '입력이 존재하지 않습니다. 다시 입력해주세요',
  notAValidCharacter: '입력은 숫자만 가능합니다. 다시 입력해주세요',
  notAValidSeedMoney: `금액은 ${LOTTO_PRICE}단위만 가능합니다. 다시 입력해주세요`,
  notAValidNumber: '소수는 입력할 수 없습니다. 다시 입력해주세요',
  notAValidInteger: '음수는 입력할 수 없습니다. 다시 입력해주세요',
  notAValidDivider: `구분자는 ${DIVIDER.comma}단위로 ${LOTTO_MAGICNUMBER.selectAmount}개 입력해야합니다. 다시 입력해주세요`,
  notAValidNumberRange: `로또 번호는 ${LOTTO_MAGICNUMBER.minValue} ~ ${LOTTO_MAGICNUMBER.maxValue} 사이의 값을 입력해야합니다. 다시 입력해주세요`,
  notAValidLottoNumber: `로또 번호는 중복될 수 없습니다. 다시 입력해주세요`,
});
