export const INPUT_MSG = {
  PURCHASE_MONEY: '구입금액을 입력해 주세요.\n',
  WIN_LOTTERY_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MSG = {
  userCanBuyLotto: (amount) => `${amount}개를 구매했습니다.`,
  userLottoNumber: (number) => `[${number}]`,
  LOTTO_STATIC_OUT: '당첨 통계\n---',
  userLottoResult: (result) => `
  3개 일치 (5,000원) - ${result[3]}개
  4개 일치 (50,000원) - ${result[4]}개
  5개 일치 (1,500,000원) - ${result[5]}개
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.bonus}개
  6개 일치 (2,000,000,000원) - ${result[6]}개\n`,
  LOTTO_REVENUE_IS: (revenue) => `총 수익률은 ${revenue}%입니다.`,
};

export const ERROR_MSG = {
  MONEY_NUMBER_ERROR: '[ERROR] 숫자(공백제외)로 입력해주세요.',
  MONEY_SHOULD_NUMBER: '[ERROR] 올바른 숫자를 입력해주세요.',
  MONEY_IS_THOUSAND: '[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.',
  MONEY_NEGATIVE_ERROR: '[ERROR] 구입 금액은 음수로 입력할 수 없습니다.',
  LOTTO_SHOULD_SIX: '[ERROR] 로또 번호는 6자리를 입력해주세요.',
  LOTTO_DUPLICATE_ERROR: '[ERROR] 로또 번호가 중복되었습니다.',
  LOTTO_STRING_ERROR: '[ERROR] 로또 번호는 숫자로 입력해주세요',
  LOTTO_DECIMAL_ERROR: '[ERROR] 로또 번호가 소수로 입력되었습니다.',
  LOTTO_RANGE_ERROR: '[ERROR] 로또 번호는 1 부터 45의 값으로 입력해주세요.',
  BONUS_NUMBER_NOT_NUMBER: '[ERROR] 보너스 번호는 숫자로 입력해주세요.',
  BONUS_NUMBER_RANGE_ERROR:
    '[ERROR] 보너스 번호는 1 부터 45의 값으로 입력해주세요.',
  WIN_NUMBER_INCLUDES_ERROR:
    '[ERROR] 당첨 번호와 보너스 번호가 중복되었습니다.',
};
