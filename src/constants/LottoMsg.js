export const INPUT_MSG = {
  PURCHASE_MONEY: '구입금액을 입력해 주세요.\n',
  WIN_LOTTERY_NUMBER: '당첨 번호를 입력해 주세요.\n',
};

export const OUTPUT_MSG = {
  userCanBuyLotto: (amount) => `${amount}개를 구매했습니다.`,
  userLottoNumber: (number) => `[${number}]`,
};

export const ERROR_MSG = {
  MONEY_SHOULD_NUMBER: '올바른 숫자를 입력해주세요.',
  MONEY_IS_THOUSAND: '구입 금액은 1,000원 단위로 입력해주세요',
  LOTTO_SHOULD_SIX: '로또 번호는 6자리를 입력해주세요',
};
