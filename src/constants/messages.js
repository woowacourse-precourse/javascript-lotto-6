const ERROR_STRING = '[ERROR]';

export const PURCHASE_AMOUNT_ERROR_MESSAGE = Object.freeze({
  empty_amount: `${ERROR_STRING} 입력값에 숫자를 적지 않았거나 공백을 적었습니다.`,
  contains_character: `${ERROR_STRING} 입력값에 문자가 포함되어 있습니다.`,
  not_integer: `${ERROR_STRING} 입력값이 정수가 아닙니다.`,
  not_divisible_by_currency_number: `${ERROR_STRING} 1000원으로 나누어 떨어지지 않습니다.`,
});

export const INPUT_MESSAGE = Object.freeze({
  purchase_amount: '구입금액을 입력해 주세요.',
  winning_numbers: '당첨 번호를 입력해 주세요.',
  bonus_number: '보너스 번호를 입력해 주세요.',
});