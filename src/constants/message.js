export const INPUT_MESSAGE = {
  lottoPurchasePrice: '구입금액을 입력해 주세요.\n',
  lottoWnningNumbers: '당첨 번호를 입력해 주세요.\n',
  lottoWinningNumbersDescription: '당첨 번호 : 쉼표(,)로 구분된 1~45 사이 중복되지 않는 6자리 수',
  lottoBonusNumber: '보너스 번호를 입력해 주세요.\n',
};

export const PRINT_MESSAGE = {
  prizesDescription: '당첨 통계',
  divide: '---',
};

const ERROR_PREFIX = '[ERROR]';
export const ERROR_MESSAGE = {
  validate: ERROR_PREFIX,
  notNumber: `${ERROR_PREFIX} 숫자만 입력 가능합니다.`,
  empty: `${ERROR_PREFIX} 빈 값은 입력 불가능합니다.`,
  notZero: `${ERROR_PREFIX} 0외에 숫자만 입력 가능합니다.`,
  notNumberFormat: `${ERROR_PREFIX} 숫자가 잘못된 형식입니다.`,
  existDuplicateNumber: `${ERROR_PREFIX} 중복된 숫자가 존재합니다.`,
  lottoPurchasePriceRange: `${ERROR_PREFIX} 로또 구입 금액은 1,000원 단위로 입력 가능합니다.`,
  lottoNumberRangee: `${ERROR_PREFIX} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  lottoLength: `${ERROR_PREFIX} 로또 번호는 6자리 입니다.`,
  bonusNumberIncludeWinningNumber: `${ERROR_PREFIX} 당첨 번호와 중복된 숫자입니다.`,
};

export const ERROR_TYPE = {
  validate: 'ValidateError',
};
