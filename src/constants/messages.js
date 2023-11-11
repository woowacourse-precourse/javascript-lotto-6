const ERROR_STRING = '[ERROR]';

export const PURCHASE_AMOUNT_ERROR_MESSAGE = Object.freeze({
  empty_amount: `${ERROR_STRING} 입력값에 숫자를 적지 않았거나 공백을 적었습니다.`,
  contains_character: `${ERROR_STRING} 입력값에 문자가 포함되어 있습니다.`,
  not_integer: `${ERROR_STRING} 입력값이 정수가 아닙니다.`,
  not_divisible_by_currency_number: `${ERROR_STRING} 1000원으로 나누어 떨어지지 않습니다.`,
});

export const LOTTO_NUMBERS_ERROR_MESSAGE = Object.freeze({
  empty_numbers: `${ERROR_STRING} 입력값에 숫자를 적지 않았거나 공백을 적었습니다.`,
  invalid_character: `${ERROR_STRING} 입력값에 쉼표와 숫자를 제외한 문자가 들어있습니다.`,
  not_integer: `${ERROR_STRING} 입력값이 정수가 아닙니다.`,
  not_in_range: `${ERROR_STRING} 입력한 숫자값 중에 1이상 45이하의 범위가 아닌 숫자가 포함되어 있습니다.`,
  duplicated: `${ERROR_STRING} 입력값에 중복된 숫자가 포함되어 있습니다.`,
  not_correct_length: `${ERROR_STRING} 입력값의 길이가 6개가 아닙니다.`,
});

export const BONUS_NUMBER_ERROR_MESSAGE = Object.freeze({
  empty_number: `${ERROR_STRING} 입력값에 숫자를 적지 않았거나 공백을 적었습니다.`,
  contains_character: `${ERROR_STRING} 입력값에 문자가 포함되어 있습니다.`,
  not_integer: `${ERROR_STRING} 입력값이 정수가 아닙니다.`,
  not_in_range: `${ERROR_STRING} 입력한 숫자값이 1이상 45이하의 범위가 아닙니다.`,
  duplicated: `${ERROR_STRING} 입력값이 당첨 번호 중 한 번호와 중복됩니다.`,
});

export const INPUT_MESSAGE = Object.freeze({
  purchase_amount: '구입금액을 입력해 주세요.\n',
  lotto_numbers: '당첨 번호를 입력해 주세요.\n',
  bonus_number: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  purchased: (lotteriesCounts) => `${lotteriesCounts}개를 구매했습니다.`,
  lottoResult: '당첨 통계\n---\n',
  fifthPlaceWin: (ballCount) => `3개 일치 (5,000원) - ${ballCount}개`,
  fourthPlaceWin: (ballCount) => `4개 일치 (50,000원) - ${ballCount}개`,
  thirdPlaceWin: (ballCount) => `5개 일치 (1,500,000원) - ${ballCount}개`,
  secondPlaceWin: (ballCount) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${ballCount}개`,
  firstPlaceWin: (ballCount) => `6개 일치 (2,000,000,000원) - ${ballCount}개`,
  incomeResult: (incomePercentage) => `총 수익률은 ${!Number.isInteger(incomePercentage) ?
    incomePercentage.toFixed(1) :
    incomePercentage
    }%입니다.`,
});