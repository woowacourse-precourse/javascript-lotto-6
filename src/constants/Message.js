export const MESSAGE_NOTIFICATION = Object.freeze({
  buyAmount: '구입금액을 입력해 주세요.\n',
  buyLotto: '개를 구매했습니다.',
});

const ERROR_PREFIX = '[ERROR]';

export const MESSAGE_ERROR = Object.freeze({
  isNotNumber: `${ERROR_PREFIX} 숫자를 입력해 주세요.`,
  isNotDividedByThousand: `${ERROR_PREFIX} 1000원 단위로 입력해 주세요.`,
});
