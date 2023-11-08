import { NUMBER, RANDOM } from './number.js';

export const SYMBOLS = {
  numberDivider: ',',
  printDivider: ', ',
  boundary: '---',
  hyphen: '-',
  lineBreak: '\n',
  percent: '%',
  openSquareBracket: '[',
  closeSquareBracket: ']',
  point: '.',
};

export const LANG = {
  korea: 'ko-KR',
};

export const REWARD_MESSAGE = {
  fifth: '5,000',
  fourth: '50,000',
  third: '1,500,000',
  second: '30,000,000',
  first: '2,000,000,000',
};

export const RANK = {
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
  none: 'none',
};

export const MESSAGE = {
  askPurchaseAmount: `구입 급액을 입력해주세요.${SYMBOLS.lineBreak}`,
  askWinningNumbers: `${SYMBOLS.lineBreak}당첨 번호를 입력해 주세요.${SYMBOLS.lineBreak}`,
  askBonusNumber: `${SYMBOLS.lineBreak}보너스 번호를 입력해 주세요.${SYMBOLS.lineBreak}`,
  winningStatistics: `${SYMBOLS.lineBreak}당첨 통계${SYMBOLS.lineBreak}`,
  purchase: '개를 구매했습니다.',
  result: '총 수익률은 ',
};

export const ERROR = {
  prefix: '[ERROR]',
  invalidPurchaseAmount: `${NUMBER.lottoPurchaseUnit}원 단위의 금액을 숫자로 입력해주세요.${SYMBOLS.lineBreak}`,
  invalidWinningNumbers: `${NUMBER.lottoCount}개 숫자를 중복 없이 쉼표로 구분하여 입력해주세요.${SYMBOLS.lineBreak}`,
  invalidBonusNumber: `당첨 번호와 중복되지 않는 숫자를 1개를 입력해주세요.${SYMBOLS.lineBreak}`,
  outOfRange: `${RANDOM.min} ~ ${RANDOM.max} 사이의 자연수를 입력해주세요.${SYMBOLS.lineBreak}`,
  invalidLottoNumbers: `로또 번호는 중복없이 ${NUMBER.lottoCount}개 자연수로 이뤄져야 합니다.${SYMBOLS.lineBreak}`,
};
