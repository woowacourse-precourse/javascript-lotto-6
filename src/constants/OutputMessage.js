import { PRIZE_NAME } from './Setting.js';

const OUTPUT_MESSAGE = Object.freeze({
  boughtNumber: '개를 구매했습니다.',
  winningResultHeader: '당첨 통계\n---',
  winningResult: {
    [PRIZE_NAME.first]: '6개 일치 (2,000,000,000원)',
    [PRIZE_NAME.second]: '5개 일치, 보너스 볼 일치 (30,000,000원)',
    [PRIZE_NAME.third]: '5개 일치 (1,500,000원)',
    [PRIZE_NAME.fourth]: '4개 일치 (50,000원)',
    [PRIZE_NAME.fifth]: '3개 일치 (5,000원)',
  },
  profitRatioHeader: '총 수익률은 ',
  profitRatioFooter: '입니다.',
});

export { OUTPUT_MESSAGE };
