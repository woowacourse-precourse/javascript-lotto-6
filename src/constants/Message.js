export const MESSAGE_NOTIFICATION = Object.freeze({
  buyAmount: '구입금액을 입력해 주세요.\n',
  buyLotto: '개를 구매했습니다.',
  winningLotto: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const ERROR_PREFIX = '[ERROR]';

export const MESSAGE_ERROR = Object.freeze({
  isNotNumber: `${ERROR_PREFIX} 숫자를 입력해 주세요.`,
  isNotDividedByThousand: `${ERROR_PREFIX} 1000원 단위로 입력해 주세요.`,
  lottoNumberSize: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
  lottoDuplicateNumber: `${ERROR_PREFIX} 로또 번호는 중복될 수 없습니다.`,
  lottoNotInput: `${ERROR_PREFIX} 번호와 쉼표(,)를 이어서 입력해주세요.`,
});
