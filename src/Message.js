const QUERY = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
};
Object.freeze(QUERY);

const ERROR = {
  falsy: '[ERROR] 정확한 숫자를 입력하셔야 합니다.',
  notBeDividedByThousand: '[ERROR] 1000으로 나누어 떨어져야 합니다.',
};
Object.freeze(ERROR);

const TEMPLATE = {
  numberOfLottos: (numberOfLottos) => `\n${numberOfLottos}개를 구매했습니다.`,
  sortedLotto: (sortedLotto) => `[${sortedLotto}]\n`,
};
Object.freeze(TEMPLATE);

export { QUERY, ERROR, TEMPLATE };
