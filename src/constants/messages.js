const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  invalidLength: '[ERROR] 로또 번호는 6개여야 합니다.',
  invalidNumberic: '[ERROR] 숫자가 잘못된 형식입니다.',
  invalidRange: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  invalidUnique: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  invalidAmount: '[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.',
  invalidBonusNumber: '[ERROR] 보너스 번호는 하나의 숫자만 가능합니다.',
  invalidUniqueBonusNumber: '[ERROR] 보너스 번호는 로또 번호와 중복되지 않아야 합니다.',
});

export { INPUT_MESSAGE, ERROR_MESSAGE };
