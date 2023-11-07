import { MissionUtils } from '@woowacourse/mission-utils';

export const { Console, Random } = MissionUtils;

export const PRICE_UNIT = 1_000;
export const PLZ_PURCHASE_AMOUNT = '구매금액을 입력해 주세요.';
export const PLZ_WINNING_NUMBERS = '당첨 번호를 입력해 주세요.';
export const PLZ_BONUS_NUMBER = '보너스 번호를 입력해 주세요.';
export const PRINT_PURCHASE_COUNT = '개를 구매했습니다.';
export const PRINT_WINNING_STATISTIC = '당첨 통계';
export const THREE_MATCHES = '3개 일치 (5,000원) - ';
export const FOUR_MATCHES = '4개 일치 (50,000원) - ';
export const FIVE_MATCHES = '5개 일치 (1,500,000원) - ';
export const FIVE_AND_BONUS_MATCHES = '5개 일치 (30,000,000원) - ';
export const SIX_MATCHES = '6개 일치 (2,000,000,000원) - ';
export const TOTAL_REVENUE = '총 수익률은 ';

export const ERROR_PURCHASE_AMOUNT_UNIT = '[ERROR] 로또 구매 금액은 1,000원 단위입니다.';
export const ERROR_PURCHASE_AMOUNT_PRICE = '[ERROR] 로또 1장의 가격은 1,000원부터 입니다.';
export const ERROR_PURCHASE_AMOUNT_STRING = '[ERROR] 로또 구매 금액은 숫자여야 합니다.';

export const ERROR_LOTTO_REPEAT = '[ERROR] 로또 번호는 중복될 수 없습니다.';
export const ERROR_LOTTO_SIX_NUMBERS = '[ERROR] 로또 번호는 6자리여야 합니다.';
export const ERROR_LOTTO_RANGE = '[ERROR] 로또 번호의 범위는 1~45 사이 입니다.';
export const ERROR_LOTTO_TYPE = '[ERROR] 로또 번호는 숫자여야 합니다.';
