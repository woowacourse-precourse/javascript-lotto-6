import { LOTTO } from './constants';

export const LOTTO_PRICE_MESSAGE = Object.freeze({
  invalidNumber: '로또 가격은 숫자여야 합니다.',
  invalidPrice: `로또 가격은 ${LOTTO.price}단위여야 합니다.`,
});

export const LOTTO_NUMBER_MESSAGE = Object.freeze({
  invalidNumber: '로또 번호는 숫자여야 합니다.',
  invalidLength: `로또 번호는 ${LOTTO.numberLength}자리여야 합니다.`,
  invalidRange: `로또 번호는 ${LOTTO.minNumber}~${LOTTO.maxNumber} 사이의 숫자여야 합니다.`,
  duplicateNumber: '로또 번호에 중복된 숫자가 있습니다.',
});
