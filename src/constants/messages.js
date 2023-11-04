export const MESSAGE = Object.freeze({
  INPUT: '구입금액을 입력해 주세요.\n',
  BUY: '개를 구매했습니다.',
  WIN_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  WINNING_STATS: '당첨 통계\n---\n',
});

const ERROR_PREFIX = '[ERROR]';
export const ERROR_MESSAGE = Object.freeze({
  NOT_SUPPORTED_TYPE: `${ERROR_PREFIX} 지원하지 않는 타입 변환 시도`,
  NOT_A_NUMBER: `${ERROR_PREFIX} 숫자가 아닌 값은 입력할 수 없습니다.`,
});
