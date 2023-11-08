import { DELIMITER } from './constants';

export const INPUT_MESSAGE = Object.freeze({
  buy: '구입금액을 입력해 주세요.',
  winningNumbers: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
});

export const OUTPUT_MESSAGE = Object.freeze({
  lottoCount: (lottoCount) => `${lottoCount}개를 구매했습니다.`,
  lottoNumbers: (lottoNumbers) => `[${lottoNumbers.join(DELIMITER.joinDelimiter)}]`,
  resultTitle: '당첨 통계',
  resultDivider: '---',
  matchResult: (matchCount, IsMatchBonus, prize, lottoCount) =>
    `${matchCount}개 일치${IsMatchBonus ? ', 보너스 볼 일치' : ''} (${prize}원) - ${lottoCount}개`,
  profitRate: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
});
