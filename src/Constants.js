export const ERROR_PREFIX = '[ERROR]';

export const MESSAGES = Object.freeze({
  purchaseMoneyInputMessage: '구입금액을 입력해 주세요.',
  purchaseLottoCountsMessage: '개를 구매했습니다.',
  winningLottoInputMessage: '당첨 번호를 입력해 주세요.',
});

export const ERROR = Object.freeze({
  moneyNumberErrorMessage: '구입금액은 양의 정수여야 합니다.',
  moneyUnitErrorMessage: '구입금액은 1,000원 단위여야 합니다.',
  lottoLengthErrorMessage: '로또 번호는 6개여야 합니다.',
  lottoInvalidErrorMessage: '로또 번호 숫자의 형식이 올바르지 않습니다.',
  lottoRangeErrorMessage: '로또 번호는 1과 45 사이의 숫자여야 합니다.',
  lottoDuplicateErrorMessage: '로또 번호는 중복되지 않는 숫자여야 합니다.',
});

export const STRINGS = Object.freeze({
  lottoPrefix: '[',
  lottoSuffix: ']',
  lottoDelimiter: ', ',
  winningDelimiter: ',',
});

export const MONEY_UNIT = 1000;
export const LOTTO_LENGTH = 6;
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 45;
