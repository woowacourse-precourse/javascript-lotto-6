export const PROMPT = Object.freeze({
  lottoBudget: '구입금액을 입력해 주세요.\n',
  winLotto: '\n당첨 번호를 입력해 주세요.\n',
  bonusLotto: '\n보너스 번호를 입력해 주세요.\n',
});

export const LOTTO = Object.freeze({
  price: 1000,
  minRange: 1,
  maxRange: 45,
  length: 6,
});

export const ERROR_PREFIX = '[ERROR]';

export const ERROR = Object.freeze({
  budget: `${ERROR_PREFIX} 구입 금액은 1000원 단위로 입력해주세요.`,
  length: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
  range: `${ERROR_PREFIX} 로또 번호는 1부터 45까지만 입력가능합니다.`,
  numberOnly: `${ERROR_PREFIX} 숫자만 입력하세요.`,
  duplicated: `${ERROR_PREFIX} 중복을 허용하지 않습니다.`,
  duplicatedWithWinLotto: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복을 허용하지 않습니다.`,
});

export const MESSAGE = Object.freeze({
  purchase: (count) => `\n${count}개를 구매했습니다.`,
});

export const REGEX = Object.freeze({
  isNumber: /^\d+$/,
});

export const RateOfReturn = (number) => `총 수익률은 ${number}%입니다.`;
