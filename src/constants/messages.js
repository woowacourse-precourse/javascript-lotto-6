import { LOTTO_CONDITION, PRICE_PER_TICKET, PRIZE_KEY, RANK } from './constants.js';

const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  purchaseAmount: (amount) => `\n${amount}개를 구매했습니다.`,
  winsStatistic: `\n당첨통계\n---`,
  totalWinsStatistic: (label, count) => `${label} - ${count}개`,
  totalProfitRatio: (profitRatio) => `총 수익률은 ${profitRatio}%입니다.`,
});

const STATISTIC_LABEL = Object.freeze({
  [PRIZE_KEY.fifthPrize]: `${RANK.fifth}개 일치 (5,000원)`,
  [PRIZE_KEY.fourthPrize]: `${RANK.fourth}개 일치 (50,000원)`,
  [PRIZE_KEY.thirdPrize]: `${RANK.third}개 일치 (1,500,000원)`,
  [PRIZE_KEY.secondPrize]: `${RANK.second}개 일치, 보너스 볼 일치 (30,000,000원)`,
  [PRIZE_KEY.firstPrize]: `${RANK.first}개 일치 (2,000,000,000원)`,
});

const PREFIX_ERROR = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  invalidLength: `${PREFIX_ERROR} 로또 번호는 ${LOTTO_CONDITION.length}개여야 합니다.`,
  invalidNumberic: `${PREFIX_ERROR} 숫자가 잘못된 형식입니다.`,
  invalidRange: `${PREFIX_ERROR} 로또 번호는 ${LOTTO_CONDITION.startRange}부터 ${LOTTO_CONDITION.endRange}사이의 숫자여야 합니다.`,
  invalidUnique: `${PREFIX_ERROR} 로또 번호는 중복되지 않아야 합니다.`,
  invalidAmount: `${PREFIX_ERROR} 구입 금액은 ${PRICE_PER_TICKET}원으로 나누어 떨어져야 합니다.`,
  invalidBonusNumber: `${PREFIX_ERROR} 보너스 번호는 하나의 숫자만 가능합니다.`,
  invalidUniqueBonusNumber: `${PREFIX_ERROR} 보너스 번호는 로또 번호와 중복되지 않아야 합니다.`,
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, STATISTIC_LABEL, ERROR_MESSAGE };
