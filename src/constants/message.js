export const INPUT_MESSAGE = {
  lottoPurchasePrice: '구입금액을 입력해 주세요.\n',
  lottoWnningNumbers: '당첨 번호를 입력해 주세요.\n',
  lottoBonusNumber: '보너스 번호를 입력해 주세요.\n',
};

const ERROR_PREFIX = '[ERROR]';
export const ERROR_MESSAGE = {
  validate: ERROR_PREFIX,
  lottoPurchasePriceRange: `${ERROR_PREFIX} 로또 구입 금액은 1,000원 단위로 입력 가능합니다.`,
  notNumber: `${ERROR_PREFIX} 숫자만 입력 가능합니다.`,
  empty: `${ERROR_PREFIX} 빈 값은 입력 불가능합니다.`,
  notZero: `${ERROR_PREFIX} 0외에 숫자만 입력 가능합니다.`,
};

export const ERROR_TYPE = {
  validate: 'validate',
};
