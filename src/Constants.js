export const ERROR_PREFIX = '[ERROR]';

export const MESSAGES = Object.freeze({
  purchaseMoneyInputMessage: '구입금액을 입력해 주세요.',
  purchaseLottoCountsMessage: '개를 구매했습니다.',
});

export const ERROR = Object.freeze({
  moneyNumberErrorMessage: '구입금액은 양의 정수여야 합니다.',
  moneyUnitErrorMessage: '구입금액은 1,000원 단위여야 합니다.',
});

export const STRINGS = Object.freeze({
  lottoPrefix: '[',
  lottoSuffix: ']',
  lottoDelimiter: ', ',
});

export const MONEY_UNIT = 1000;
export const LOTTO_LENGTH = 6;
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 45;
