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
  LOTTO_REVENUE_IS: (revenue) => `총 수익률은 ${revenue}%입니다.\n`,
};

export const ERROR_MSG = {
  MONEY_NOT_BLANK: '[ERROR] 공백이 포함되었습니다. 다시 입력해주세요',
  MONEY_SHOULD_NUMBER: '[ERROR] 올바른 숫자를 입력해주세요.',
  MONEY_IS_THOUSAND: '[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.',
  LOTTO_SHOULD_SIX: '[ERROR] 로또 번호는 6자리를 입력해주세요.',
  LOTTO_DUPLICATE_ERROR: '[ERROR] 로또 번호가 중복되었습니다.',
  BONUS_NUMBER_NOT_NUMBER: '[ERROR] 보너스 번호는 숫자로 입력해주세요.',
};
