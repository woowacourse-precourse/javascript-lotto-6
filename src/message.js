export const USER_INPUT = {
  purchaseAmount: '구매금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};

export const ANNOUNCEMENT = {
  purchase: (amount) => `\n${amount}개를 구매했습니다.`,
};

export const ERROR = {
  array: {
    quantityMismatch: '[ERROR] 로또 번호는 6개여야 합니다.',
    duplicate: '[ERROR] 중복되는 번호가 있습니다.',
  },
};
