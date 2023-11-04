import { GAME_RULE } from './gameRule.js';

export const MESSAGE = Object.freeze({
  INPUT: '구입금액을 입력해 주세요.\n',
  BUY: '개를 구매했습니다.',
  WIN_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  WINNING_STATS: '당첨 통계\n---\n',
});

const ERROR_PREFIX = '[ERROR]';
export const ERROR_MESSAGE = Object.freeze({
  NOT_SUPPORTED_TYPE: `${ERROR_PREFIX} 지원하지 않는 타입 변환을 시도했습니다. 타입을 다시 확인해주세요.`,
  NOT_A_NUMBER: `${ERROR_PREFIX} 숫자가 아닌 값은 입력할 수 없습니다.`,
  NEGATIVE_VALUE: `${ERROR_PREFIX} 미입력 및 0이하의 숫자는 입력할 수 없습니다.`,
  NOT_BEING_DIVIDED: `${ERROR_PREFIX} ${GAME_RULE.MIN_AMOUNT_UNIT}으로 나누어 떨어지지 않는 숫자는 입력할 수 없습니다.`,
  OVER_THE_LIMIT: `${ERROR_PREFIX} 한 회차에 ${GAME_RULE.MAX_AMOUNT_UNIT}만 원을 초과하여 구매할 수 없습니다.`,
});
