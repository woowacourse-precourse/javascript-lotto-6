import { 
  THE_NUMBER_OF_LOTTO_NUMBER,
  LOTTO_PRICE, 
  LOTTO_NUMBER_MAX, 
  LOTTO_NUMBER_MIN, 
  LOCALE, 
  ROUNDING_POINT 
} from './constants.js';

export const VALIDATION_THE_NUMBER_OF_LOTTO_NUMBER = `[ERROR] 로또 번호는 ${THE_NUMBER_OF_LOTTO_NUMBER}개여야 합니다.`;
export const VALIDATION_LOTTO_NUMBER_RANGE = `[ERROR] 로또 번호는 ${LOTTO_NUMBER_MIN}부터 ${LOTTO_NUMBER_MAX} 사이의 숫자여야 합니다.`;
export const VALIDATION_LOTTO_NUMBER_OVERLAP = `[ERROR] 로또 번호는 중복되지 않아야 합니다.`;
export const VALIDATION_INPUT_PURCHASE_AMOUNT_TYPE = '[ERROR] 로또 구입 금액은 숫자로 입력해야 합니다.';
export const VALIDATION_INPUT_PURCHASE_AMOUNT_UNIT = `[ERROR] 로또 구입 금액은 ${LOTTO_PRICE.toLocaleString('ko-KR')}원 단위여야 합니다.`;
