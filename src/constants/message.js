import { START_NUMBER, END_NUMBER, SIZE, KRW_UNIT } from './constants.js';

export const MEESAGE_INPUT_COINS = '구입금액을 입력해 주세요.\n';
export const MEESAGE_INPUT_WINNING = '\n당첨 번호를 입력해 주세요.\n';
export const MEESAGE_INPUT_BONUS = '\n보너스 번호를 입력해 주세요.\n';

export const MESSAGE_OUTPUT_COINS = `\n{result}개를 구매했습니다.`;
export const MESSAGE_LOTTO_RESULT = '\n당첨 통계\n---';
export const MESSAGE_THREE_MATCHED = `3개 일치 (5,000원) - {result}개`;
export const MESSAGE_FOUR_MATCHED = `4개 일치 (50,000원) - {result}개`;
export const MESSAGE_FIVE_MATCHED = `5개 일치 (1,500,000원) - {result}개`;
export const MESSAGE_BONUS_MATCHED = `5개 일치, 보너스 볼 일치 (30,000,000원) - {result}개`;
export const MESSAGE_SIX_MATCHED = `6개 일치 (2,000,000,000원) - {result}개`;
export const MESSAGE_PROFIT = `\n총 수익률은 {result}%입니다.`;

export const ERROR_INVALID_NUMBER = '[ERROR] 숫자가 잘못된 형식입니다.\n';
export const ERROR_INVALID_LENGTH = `[ERROR] : 로또 번호는 ${SIZE}개여야 합니다.\n`;
export const ERROR_NOT_INCLUDE_COMMA = '[ERROR] : 쉼표로 구분하여 입력하세요\n';
export const ERROR_INVALID_UNIT = `[ERROR] : 구매 금액은 ${KRW_UNIT}원 단위입니다.\n`;
export const ERROR_NOT_NATURAL = '[ERROR] : 0 이상의 자연수를 입력하세요.\n';
export const ERROR_INVALID_RANGE = `[ERROR] : ${START_NUMBER}부터 ${END_NUMBER}까지의 수를 입력하세요\n`;
export const ERROR_INVALID_RANGE_NATUAL = `
[ERROR] : ${START_NUMBER}부터 ${END_NUMBER}까지의 자연수를 입력하세요\n`;
export const ERROR_INVALID_BONUS =
  '[ERROR] : 당첨금액과 중복되지 않는 수를 입력해주세요\n';
export const ERROR_DUPLICATE_NUMBER =
  '[ERROR] : 중복된 수를 선택할 수 없습니다.\n';
