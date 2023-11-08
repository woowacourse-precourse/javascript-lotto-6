import { LOTTO } from './LottoInfo.js';

const QUERY = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};
Object.freeze(QUERY);

const ERROR = {
  positiveNumber: '[ERROR] 정확한 숫자를 입력하셔야 합니다.\n',
  canDividedByPrice: `[ERROR] ${LOTTO.price}으로 나누어 떨어져야 합니다.\n`,
  count: `[ERROR] 로또 번호는 ${LOTTO.count}개여야 합니다.\n`,
  unique: '[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.\n',
  between: `[Error] 로또 번호는 ${LOTTO.number.min}에서 ${LOTTO.number.max} 사이의 숫자여야 합니다.\n`,
  uniqueBonusNumber: '[ERROR] 로또 번호에 보너스 번호 숫자가 없어야 합니다.\n',
};
Object.freeze(ERROR);

const WINNING_STATISTICS = '\n당첨 통계\n---\n';

const WINNING_RESULTS_BY = {
  1: (count) => `6개 일치 (2,000,000,000원) - ${count}개\n`,
  2: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`,
  3: (count) => `5개 일치 (1,500,000원) - ${count}개\n`,
  4: (count) => `4개 일치 (50,000원) - ${count}개\n`,
  5: (count) => `3개 일치 (5,000원) - ${count}개\n`,
};
Object.freeze(WINNING_RESULTS_BY);

const TEMPLATE = {
  winnigResultsBy: WINNING_RESULTS_BY,
  lottoCount: (lottoCount) => `\n${lottoCount}개를 구매했습니다.`,
  sortedLotto: (sortedLotto) => `[${sortedLotto}]\n`,
  profitRate: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
};
Object.freeze(TEMPLATE);

export { QUERY, ERROR, WINNING_STATISTICS, TEMPLATE };
