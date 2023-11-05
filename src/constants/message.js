import { NUMBER, RANDOM } from './number.js';

export const SYMBOLS = {
  nameDivider: ',',
  numberDivider: ', ',
  boundary: '---',
  hyphen: '-',
  lineBreak: '\n',
  percent: '%',
  openSquareBracket: '[',
  closeSquareBracket: ']',
};

export const REWARD = {
  first: '2,000,000,000',
  second: '30,000,000',
  third: '1,500,000',
  fourth: '50,000',
  fifth: '5,000',
};

export const MESSAGE = {
  askPurchaseAmount: `구입 급액을 입력해주세요.${SYMBOLS.lineBreak}`,
  askWinningNumbers: `당첨 번호를 입력해 주세요.${SYMBOLS.lineBreak}`,
  askBonusNumber: `보너스 번호를 입력해 주세요.${SYMBOLS.lineBreak}`,
  winningStatistics: `${SYMBOLS.lineBreak}당첨 통계${SYMBOLS.lineBreak}`,
  result: '총 수익률은',
};

export const RESULT = {
  first: `${NUMBER.first}개 일치 (${REWARD.first}원) ${SYMBOLS.hyphen} `,
  second: `${NUMBER.second}개 일치, 보너스 볼 일치 (${REWARD.second}원) ${SYMBOLS.hyphen} `,
  third: `${NUMBER.third}개 일치 (${REWARD.third}원) ${SYMBOLS.hyphen} `,
  fourth: `${NUMBER.fourth}개 일치 (${REWARD.fourth}원) ${SYMBOLS.hyphen} `,
  fifth: `${NUMBER.fifth}개 일치 (${REWARD.fifth}원) ${SYMBOLS.hyphen} `,
};

export const ERROR = {
  prefix: '[ERROR]',
  invalidPurchaseAmount: `${NUMBER.lottoPurchaseUnit}원 단위의 금액을 숫자로 입력해주세요.${SYMBOLS.lineBreak}`,
  invalidWinningNumbers: `${NUMBER.lottoCount}개 숫자를 중복 없이 쉼표로 구분하여 입력해주세요.${SYMBOLS.lineBreak}`,
  invalidBonusNumber: `당첨 번호와 중복되지 않는 숫자를 입력해주세요.${SYMBOLS.lineBreak}`,
  outOfRange: `${RANDOM.min} ~ ${RANDOM.max} 사이의 자연수를 입력해주세요.${SYMBOLS.lineBreak}`,
};
