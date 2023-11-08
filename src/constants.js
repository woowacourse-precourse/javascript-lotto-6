const PROMPT_BUY_LOTTO = '구입금액을 입력해 주세요.';

const formatLottoCountMessage = count => `${count}개를 구매했습니다.`;

const formatPurchasedLottos = lotto => `[${lotto.join(', ')}]\n`; // Single \n if you want to print a newline

const PROMPT_INPUT_WINNING_NUMBER = '당첨 번호를 입력해 주세요';

const PROMPT_GENERATE_BONUS_NUM = '보너스 번호를 입력해 주세요.';

const LOTTO_OUTCOMES = [5000, 50000, 1500000, 30000000, 2000000000];

const PRIZE_DESCRIPTIONS = [
  '3개 일치 (5,000원)',
  '4개 일치 (50,000원)',
  '5개 일치 (1,500,000원)',
  '5개 일치, 보너스 볼 일치 (30,000,000원)',
  '6개 일치 (2,000,000,000원)',
];

export {
  formatLottoCountMessage,
  formatPurchasedLottos,
  PROMPT_BUY_LOTTO,
  PROMPT_INPUT_WINNING_NUMBER,
  PROMPT_GENERATE_BONUS_NUM,
  LOTTO_OUTCOMES,
  PRIZE_DESCRIPTIONS,
};
